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
    const userToken = this.repository.create({
      user_id,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UserTokensRepository };
