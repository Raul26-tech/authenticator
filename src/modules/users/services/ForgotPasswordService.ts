import { UserRepository } from "../infra/typeorm/repositories/UserRepository";
import { UserTokensRepository } from "../infra/typeorm/repositories/UserTokensRepository";
import { EtherialEmail } from "@config/mail/EtherialEmail";

interface IRequest {
  email: string;
}

class ForgotPasswordService {
  async execute({ email }: IRequest) {
    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokensRepository();
    const etherialEmail = new EtherialEmail();

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error(
        "O e-mail informado não foi encontrado, digite um e-mail válido."
      );
    }

    const token = await userTokenRepository.generate(user.id);

    await etherialEmail.sendEmail({
      to: email,
      body: `Solicitação de redefinição de senha recebida: ${token.token}`,
    });
  }
}

export { ForgotPasswordService };
