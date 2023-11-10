import { ListCustomersService } from "@modules/customers/services/ListCustomersService";
import { Request, Response } from "express";

class ListCustomersController {
  async handle(request: Request, response: Response) {
    const customerListService = new ListCustomersService();

    const customers = await customerListService.execute();

    return response.status(200).json(customers);
  }
}

export { ListCustomersController };
