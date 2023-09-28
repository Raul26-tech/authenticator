import { DeleteProductService } from "@modules/products/services/DeleteProductService";
import { Request, Response } from "express";

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteProduct = new DeleteProductService();

    const product = await deleteProduct.execute(id);

    return response.status(200).json(product);
  }
}

export { DeleteProductController };
