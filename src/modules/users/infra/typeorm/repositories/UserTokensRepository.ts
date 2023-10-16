import { Repository } from "typeorm";
import { UserToken } from "../entities/UserToken";
import { AppDataSource } from "@shared/infra/typeorm";

class UserTokensRepository {
  private repository: Repository<UserToken>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserToken);
  }

  async findByToken(token: string) {
    const userToken = await this.repository.findOne({
      where: {
        token,
      },
    });

    return userToken;
  }

  async generate(user_id: string) {
    const userToken = await this.repository.create({
      user_id,
    });

    return userToken;
  }
}

export { UserTokensRepository };
