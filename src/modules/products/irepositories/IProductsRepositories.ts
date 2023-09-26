import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { ICreteProductDTO } from "../dto/ICreateProductDTO";

interface IProductsRepository {
  create(data: ICreteProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product>;
  listProducts(): Promise<Product[]>;
}

export { IProductsRepository };
