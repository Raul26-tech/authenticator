import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { ICreteProductDTO } from "../dto/ICreateProductDTO";
import { IUpdateProductDTO } from "../dto/IUpdateProductDTO";
import { IProductsIdsDTO } from "../dto/IProductsIds.DTO";
import { ISaveProductDTO } from "../dto/ISaveProductDTO";

interface IProductsRepository {
  create(data: ICreteProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product>;
  listProducts(): Promise<Product[]>;
  updateProduct(data: IUpdateProductDTO): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
  showProduct(id: string): Promise<Product>;
  findByIds(products: Product[]): Promise<Product[]>;
}

export { IProductsRepository };
