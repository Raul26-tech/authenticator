import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "@shared/infra/typeorm";
import { IUserRepository } from "@modules/users/irepositories/IUserRepositories";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        name,
      },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

export { UserRepository };
