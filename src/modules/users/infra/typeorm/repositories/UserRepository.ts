import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "@shared/infra/typeorm";
import { IUserRepository } from "@modules/users/irepositories/IUserRepositories";
import { ICreateUSerDTO } from "@modules/users/dto/ICreateUserDTO";
import { hash } from "bcrypt";

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

        // Criptografando a senha para fazer o envio para o banco
        // const hashedPassword = await hash(password, 8);

        const user = repository.create({
          name,
          email,
          password,
        });

        console.log(password);

        await repository.save(user);

        return user;
      }
    );

    return createUser;
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

  async listUsers(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
}

export { UserRepository };
