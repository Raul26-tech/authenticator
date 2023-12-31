import { CreateProductService } from "@modules/products/services/CreateProductService";
import { Request, Response } from "express";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, price, quantity } = request.body;

    console.log(name, price, quantity);

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return response.status(200).json(product);
  }
}

export { CreateProductController };
