import { DeleteCustomerService } from "@modules/customers/services/DeleteCustomerService";
import { Request, Response } from "express";

class DeleteCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deleteCustomerService = new DeleteCustomerService();

    await deleteCustomerService.execute(id);

    return response.json([]);
  }
}

export { DeleteCustomerController };
