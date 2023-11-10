import { Request, Response } from "express";
import { UpdateCustomerService } from "../../../services/UpdateCustomerService";

class UpdateCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email } = request.body;
    const updateCustomerService = new UpdateCustomerService();

    const customer = await updateCustomerService.execute({
      id,
      name,
      email,
    });

    return response.status(201).json(customer);
  }
}

export { UpdateCustomerController };
