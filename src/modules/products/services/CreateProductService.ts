import { ICreteProductDTO } from "../dto/ICreateProductDTO";
import { Product } from "../infra/typeorm/entities/Product";
import { ProductsRepository } from "../infra/typeorm/repositories/ProductsRepository";

class CreateProductService {
  async execute({ name, price, quantity }: ICreteProductDTO): Promise<Product> {
    const productsRepository = new ProductsRepository();
    const productsExists = await productsRepository.findByName(name);

    if (productsExists) {
      throw new Error("Esse produto já existe com esse mesmo nome !");
    }

    const product = productsRepository.create({
      name,
      price,
      quantity,
    });

    return product;
  }
}

export { CreateProductService };
