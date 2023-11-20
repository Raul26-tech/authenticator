import { CreateOrderService } from "@modules/orders/services/CreateOrderService";
import { Request, Response } from "express";

class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { customer_id, products } = request.body;
    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({
      customer: customer_id,
      products,
    });

    return response.status(201).json(order);
  }
}

export { CreateOrderController };
