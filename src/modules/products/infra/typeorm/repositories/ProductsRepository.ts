import { IProductsRepsitory } from "@modules/irepositories/IProductsRepositories";
import { Repository } from "typeorm";
import { Product } from "../entities/Product";
import { AppDataSource } from "@shared/infra/typeorm";
import { ICreteProductDTO } from "@modules/dto/ICreateProductDTO";

class CustomProductsRepository implements IProductsRepsitory {
  private repository: Repository<Product>;

  constructor() {
    this.repository = AppDataSource.getRepository(Product);
  }

  // Criando o produto
  async create({ name, price, quantity }): Promise<Product> {
    const createProduct = await AppDataSource.transaction(
      "SERIALIZABLE",
      async (manager) => {
        const repository = manager.getRepository(Product);

        const product = await repository.create({
          name,
          price,
          quantity,
        });

        await repository.save(product);
        return product;
      }
    );

    return createProduct;
  }

  async findByName(name: string): Promise<Product> {
    const product = this.repository.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}

export { CustomProductsRepository };
