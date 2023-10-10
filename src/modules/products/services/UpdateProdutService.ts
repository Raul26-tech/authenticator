import { IUpdateProductDTO } from "../dto/IUpdateProductDTO";
import { ProductsRepository } from "../infra/typeorm/repositories/ProductsRepository";

class UpdateProductService {
  async execute({ id, name, price, quantity }: IUpdateProductDTO) {
    const product = new ProductsRepository();

    if (!id) {
      throw Error("Produto informado não foi encontrado");
    }

    return await product.updateProduct({
      id,
      name,
      price,
      quantity,
    });
  }
}

export { UpdateProductService };
