import { Request, Response } from "express";
import { ListAllProductsService } from "@modules/products/services/ListAllProductsService";

class ListAllProductsController {
  async handle(request: Request, response: Response) {
    const listProducts = new ListAllProductsService();

    const products = await listProducts.execute();

    return response.status(201).json(products);
  }
}

export { ListAllProductsController };
