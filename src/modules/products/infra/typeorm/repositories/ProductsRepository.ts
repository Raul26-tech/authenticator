import { Repository } from "typeorm";
import { Product } from "../entities/Product";
import { AppDataSource } from "@shared/infra/typeorm";

class ProductRepository {
  public repository: Repository<Product>;

  constructor() {
    this.repository = AppDataSource.getRepository(Product);
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = this.repository.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}

export { ProductRepository };
