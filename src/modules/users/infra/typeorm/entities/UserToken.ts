import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("user_tokens")
class UserToken {
  constructor() {
    this.id = uuidV4();
  }

  @Column()
  @Generated("uuid")
  token: string;

  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @CreateDateColumn({ name: "created_at" })
  createAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export { UserToken };
