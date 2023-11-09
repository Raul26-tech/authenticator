import { ShowCustomerService } from "@modules/customers/services/ShowCustomerService";
import { Request, Response } from "express";

class ShowCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const showCustomerService = new ShowCustomerService();

    const customer = await showCustomerService.execute(id);
    console.log(customer);

    return response.status(200).json(customer);
  }
}

export { ShowCustomerController };
