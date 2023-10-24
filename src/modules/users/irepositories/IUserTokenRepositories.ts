import { UserToken } from "../infra/typeorm/entities/UserToken";

interface IUserToken {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken>;
}

export { IUserToken };
