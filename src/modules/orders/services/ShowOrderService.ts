import { OrdersRepository } from "../infra/typeorm/repositories/OrdersRepository";

class ShowOrderService {
  async execute(id: string) {
    const orderRepository = new OrdersRepository();

    const order = await orderRepository.findById(id);

    if (!order) {
      throw new Error("O pedido de venda não foi encontrado");
    }

    return order;
  }
}

export { ShowOrderService };
