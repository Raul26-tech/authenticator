import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Order } from "./Order";
import { Product } from "@modules/products/infra/typeorm/entities/Product";

@Entity("orders_products")
class OrdersProducts {
  constructor() {
    this.id = uuidV4();
  }

  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Order, (order) => order.order_products)
  @JoinColumn({ name: "order_id" })
  order: Order;

  @ManyToOne(() => Product, (product) => product.order_products)
  @JoinColumn({ name: "product_id" })
  product: Order;

  @Column()
  order_id: string;

  @Column()
  product_id: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export { OrdersProducts };
