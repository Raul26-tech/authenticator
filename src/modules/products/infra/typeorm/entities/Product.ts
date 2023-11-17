import { OrdersProducts } from "@modules/orders/infra/typeorm/entities/OrderProducts";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuidV4 } from "uuid";

@Entity("products")
class Product {
  constructor() {
    this.id = uuidV4();
  }

  @PrimaryColumn()
  id: string;

  @OneToMany(() => OrdersProducts, (order_products) => order_products.product)
  order_products: OrdersProducts[];

  @Column()
  name: string;

  @Column({ name: "price" })
  price: number;

  @Column({ name: "quantity" })
  quantity: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export { Product };
