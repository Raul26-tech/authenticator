import { CustomerRepository } from "@modules/customers/infra/typeorm/repositories/CustomersRepository";
import { OrdersRepository } from "../infra/typeorm/repositories/OrdersRepository";
import { ProductsRepository } from "@modules/products/infra/typeorm/repositories/ProductsRepository";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { AppDataSource } from "@shared/infra/typeorm";

interface ICreateOrder {
  customer: string;
  products: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}

class CreateOrderService {
  async execute({ customer, products }: ICreateOrder) {
    const orderRepository = new OrdersRepository();
    const customerRepository = new CustomerRepository();
    const productsRepository = new ProductsRepository();

    // Sofrerá alterações futuras
    const productRepository = AppDataSource.getRepository(Product);

    const customerExists = await customerRepository.findById(customer);

    if (!customerExists) {
      throw new Error("Cliente não foi encontrado");
    }

    const existProducts = await productsRepository.findByIds(
      products as unknown as Product[]
    );

    console.log(existProducts);

    if (!existProducts) {
      throw new Error("Um ou mais produtos selecionados não foram encontrados");
    }

    const existsProductsIds = existProducts.map((productIds) => productIds.id);

    const checkProducts = products.filter(
      (product) => !existsProductsIds.includes(product.id)
    );

    if (checkProducts.length) {
      throw new Error(
        `Os produtos informados não foram encontrados ${checkProducts[0].id}`
      );
    }

    const quantityProduct = products.filter(
      (product) =>
        existProducts.filter(
          (productQuantity) => productQuantity.id === product.id
        )[0].quantity < product.quantity
    );

    if (quantityProduct.length) {
      throw new Error(
        `A quantidade dos produtos solicitados é maior do que a quantidade dos produtos em estoque, ${quantityProduct} produtos solicitados`
      );
    }

    const serializedProducts = products.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      price: existProducts.filter(
        (productExists) => productExists.id === product.id
      )[0].price,
    }));

    const order = await orderRepository.createOrder({
      customer: customerExists,
      products: serializedProducts,
    });

    const { order_products } = order;

    // Atualizando a quantidade de produtos em estoque
    const updatedProductQuantity = order_products.map((product) => ({
      id: product.product_id,
      quantity:
        existProducts.filter(
          (productExists) => productExists.id === product.product_id
        )[0].quantity - product.quantity,
    }));

    await productRepository.save(updatedProductQuantity);

    return order;
  }
}

export { CreateOrderService };
