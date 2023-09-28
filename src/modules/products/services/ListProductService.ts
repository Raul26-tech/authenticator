import { ProductsRepository } from "../infra/typeorm/repositories/ProductsRepository";

class ListProductService {
  async execute(id: string) {
    const product = new ProductsRepository();

    if (!id) {
      throw new Error("Essem produto não existe !");
    }

    return product.showProduct(id);
  }
}

export { ListProductService };
