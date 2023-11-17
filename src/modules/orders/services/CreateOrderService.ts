import { CustomerRepository } from "@modules/customers/infra/typeorm/repositories/CustomersRepository";
import { ICreateOrderDTO } from "../dto/ICreateOrderDTO";
import { OrdersRepository } from "../infra/typeorm/repositories/OrdersRepository";
import { ProductsRepository } from "@modules/products/infra/typeorm/repositories/ProductsRepository";

interface ICreateOrder {
  customer: string;
  products: {
    id: string;
    price: number;
    quantity: number;
  }[];
}

class CreateOrderService {
  async execute({ customer, products }: ICreateOrder) {
    const orderRepository = new OrdersRepository();
    const customerRepository = new CustomerRepository();
    const productsRepository = new ProductsRepository();

    const customerExists = await customerRepository.findById(customer);

    if (!customerExists) {
      throw new Error("Cliente não foi encontrado");
    }

    if (!productsRepository) {
    }

    // const order = await createOrderRepository.createOrder({
    //   customer,
    //   products,
    // });
  }
}

export { CreateOrderService };
