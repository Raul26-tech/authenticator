import { UpdateProductService } from "@modules/products/services/UpdateProdutService";
import { Request, Response } from "express";

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, quantity, price } = request.body;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({
      id,
      name,
      quantity,
      price,
    });

    return response.status(200).json(product);
  }
}

export { UpdateProductController };
