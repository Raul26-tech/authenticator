import { AppDataSource } from "@shared/infra/typeorm";
import { Product } from "../infra/typeorm/entities/Product";
import { ProductsRepository } from "../infra/typeorm/repositories/ProductsRepository";

class ListAllProductsService {
  async execute(): Promise<Product[]> {
    const productsList = new ProductsRepository();
    const products = productsList.listProducts();

    return products;
  }
}

export { ListAllProductsService };
