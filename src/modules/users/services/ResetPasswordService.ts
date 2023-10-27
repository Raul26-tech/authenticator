import { hash } from "bcryptjs";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";
import { UserTokensRepository } from "../infra/typeorm/repositories/UserTokensRepository";
import { isAfter, addHours } from "date-fns";

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  async execute({ token, password }: IRequest) {
    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokensRepository();

    const userToken = await userTokenRepository.findByToken(token);

    console.log(token);

    if (!userToken) {
      throw new Error(" O token do usuário não existe.");
    }

    const user = await userRepository.findById(userToken.user_id);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Validando data de criação do token para ver se o token está expirado
    const tokenCreatedAt = userToken.createAt;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new Error("Token expirado");
    }

    user.password = await hash(password, 8);

    await userRepository.create(user);
  }
}

export { ResetPasswordService };
