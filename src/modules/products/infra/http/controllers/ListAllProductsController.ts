import { Request, Response } from "express";
import { ListAllProductsService } from "@modules/products/services/ListAllProductsService";

class ProductsController {
  async handle(request: Request, response: Response) {
    const listProducts = new ListAllProductsService();

    const products = await listProducts.execute();

    return response.status(201).json(products);
  }
}

export { ProductsController };
