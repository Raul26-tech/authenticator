import { ShowOrderService } from "@modules/orders/services/ShowOrderService";
import { Request, Response } from "express";

class ShowOrderController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const showOrderService = new ShowOrderService();

    const order = await showOrderService.execute(id);

    return response.json(order);
  }
}

export { ShowOrderController };
