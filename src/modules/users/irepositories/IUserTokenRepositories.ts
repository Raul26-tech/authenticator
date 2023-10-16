import { UserToken } from "../infra/typeorm/entities/UserToken";

interface IUserToken {
  findByToken(token: string): Promise<UserToken>;
  generate(user_id: string): Promise<UserToken>;
}

export { IUserToken };
