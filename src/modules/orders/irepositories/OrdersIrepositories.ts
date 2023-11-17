import { ICreateOrderDTO } from "../dto/ICreateOrderDTO";
import { Order } from "../infra/typeorm/entities/Order";

export interface IOrdersRepository {
  findById(id: string): Promise<Order | undefined>;
  createOrder(data: ICreateOrderDTO): Promise<Order>;
}
