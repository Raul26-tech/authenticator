import { Repository } from "typeorm";
import { Product } from "../entities/Product";
import { AppDataSource } from "@shared/infra/typeorm";
import { IProductsRepository } from "@modules/products/irepositories/IProductsRepositories";
import { IUpdateProductDTO } from "@modules/products/dto/IUpdateProductDTO";
import { ICreteProductDTO } from "@modules/products/dto/ICreateProductDTO";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = AppDataSource.getRepository(Product);
  }

  // Cria o produto
  async create({ name, price, quantity }: ICreteProductDTO): Promise<Product> {
    const createProduct = await AppDataSource.transaction(
      "SERIALIZABLE",
      async (manager) => {
        const repository = manager.getRepository(Product);

        const product = repository.create({
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
    const product = await this.repository.findOne({
      where: {
        name,
      },
    });

    return product;
  }

  // Lista todos produtos
  async listProducts(): Promise<Product[]> {
    const products = await this.repository.find();

    return products;
  }

  // Lista um producto específico
  async showProduct(id: string): Promise<Product> {
    const product = await this.repository.findOne({
      where: {
        id,
      },
    });
    return product;
  }

  // Atualiza o produto
  async updateProduct({
    id,
    name,
    price,
    quantity,
  }: IUpdateProductDTO): Promise<Product> {
    const product = await this.repository.findOneBy({ id });

    Object.assign(product, {
      id,
      name,
      price,
      quantity,
    });

    await this.repository.save(product);

    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    const product = await this.repository.findOne({
      where: {
        id,
      },
    });

    await this.repository.remove(product);
  }
}

export { ProductsRepository };
