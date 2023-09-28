import { ProductsRepository } from "../infra/typeorm/repositories/ProductsRepository";

class DeleteProductService {
  async execute(id: string) {
    const product = new ProductsRepository();

    if (!id) {
      throw new Error("Produto não foi informado");
    }

    return product.deleteProduct(id);
  }
}

export { DeleteProductService };
