import { ICreateUSerDTO } from "../dto/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUserRepository {
  create(data: ICreateUSerDTO): Promise<User>;
  findByName(name: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  listUsers(): Promise<User[]>;
}

export { IUserRepository };
