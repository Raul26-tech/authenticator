import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "@shared/infra/typeorm";
import { IUserRepository } from "@modules/users/irepositories/IUserRepositories";
import { ICreateUSerDTO } from "@modules/users/dto/ICreateUserDTO";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({ name, email, password }: ICreateUSerDTO): Promise<User> {
    const createUser = await AppDataSource.transaction(
      "SERIALIZABLE",
      async (manager) => {
        const repository = manager.getRepository(User);

        const user = repository.create({
          name,
          email,
          password,
        });

        await repository.save(user);

        return user;
      }
    );

    return createUser;
  }

  async save(data: ICreateUSerDTO): Promise<User> {
    const user = this.repository.save(data);

    return user;
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

    console.log("Email do usuário", email);

    return user;
  }

  async listUsers(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
}

export { UserRepository };
