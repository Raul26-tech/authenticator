import { UserRepository } from "../infra/typeorm/repositories/UserRepository";

class ListUserService {
  async execute() {
    const user = new UserRepository();

    const usersAll = await user.listUsers();

    return usersAll;
  }
}

export { ListUserService };
