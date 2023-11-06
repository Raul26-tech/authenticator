import { UserRepository } from "../infra/typeorm/repositories/UserRepository";

class ShowProfileService {
  async execute(id: string) {
    const user = new UserRepository();

    const userInformated = await user.findById(id);

    if (!userInformated) {
      throw new Error("O usuário informado não foi encontrado");
    }

    return userInformated;
  }
}

export { ShowProfileService };
