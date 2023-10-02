import { User } from "../infra/typeorm/entities/User";

interface IUserRepository {
  // create(): Promise<User>
  findByName(name: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUserRepository };
