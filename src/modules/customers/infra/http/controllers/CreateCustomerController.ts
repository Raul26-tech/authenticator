import { CreateCustomerService } from "@modules/customers/services/CreateCustomerService";
import { Request, Response } from "express";

class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;
    const createCustomerServicer = new CreateCustomerService();

    const customer = await createCustomerServicer.execute({ name, email });

    return response.status(201).json(customer);
  }
}

export { CreateCustomerController };
