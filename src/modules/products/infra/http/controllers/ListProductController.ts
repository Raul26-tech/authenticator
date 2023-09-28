import { ListProductService } from "@modules/products/services/ListProductService";
import { Request, Response } from "express";

class ListProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const product = new ListProductService();

    const result = await product.execute(id);

    return response.status(201).json(result);
  }
}

export { ListProductController };
