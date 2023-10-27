import { UserRepository } from "../infra/typeorm/repositories/UserRepository";
import { UserTokensRepository } from "../infra/typeorm/repositories/UserTokensRepository";

interface IRequest {
  email: string;
}

class ForgotPasswordService {
  async execute({ email }: IRequest) {
    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokensRepository();

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error(
        "O e-mail informado não foi encontrado, digite um e-mail válido."
      );
    }

    await userTokenRepository.generate(user.id);

    return user;
  }
}

export { ForgotPasswordService };
