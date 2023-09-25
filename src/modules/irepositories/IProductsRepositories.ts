import { ICreteProductDTO } from "@modules/dto/ICreateProductDTO";
import { Product } from "@modules/products/infra/typeorm/entities/Product";

interface IProductsRepsitory {
  create(data: ICreteProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product>;
}

export { IProductsRepsitory };
