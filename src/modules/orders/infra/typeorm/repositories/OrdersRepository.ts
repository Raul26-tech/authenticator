import { Repository } from "typeorm";
import { Order } from "../entities/Order";
import { AppDataSource } from "@shared/infra/typeorm";
import { IOrdersRepository } from "@modules/orders/irepositories/OrdersIrepositories";
import { ICreateOrderDTO } from "@modules/orders/dto/ICreateOrderDTO";

class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = AppDataSource.getRepository(Order);
  }

  async findById(id: string): Promise<Order> {
    const order = await this.repository.findOne({
      where: { id },
      relations: ["order_products", "customer"],
    });

    return order;
  }

  async createOrder({ customer, products }: ICreateOrderDTO): Promise<Order> {
    const order = this.repository.create({
      customer: customer,
      order_products: products,
    });

    await this.repository.save(order);

    return order;
  }
}

export { OrdersRepository };
