import { Repository } from "typeorm";
import { Product } from "../entities/Product";
import { AppDataSource } from "@shared/infra/typeorm";
import { IProductsRepository } from "@modules/products/irepositories/IProductsRepositories";
import { ICreteProductDTO } from "@modules/products/dto/ICreateProductDTO";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = AppDataSource.getRepository(Product);
  }

  // Cria o produto
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

  // Veridica se já existe um produto com o mesmo nome
  async findByName(name: string): Promise<Product> {
    const product = this.repository.findOne({
      where: {
        name,
      },
    });

    return product;
  }

  // Lista todos produtos
  listProducts(): Promise<Product[]> {
    const products = this.repository.find();

    return products;
  }
}

export { ProductsRepository };
