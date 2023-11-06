import path, { resolve } from "path";
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

    const { token } = await userTokenRepository.generate(user.id);

    const forgotPasswordTemplate = resolve(
      "views",
      "emails",
      "forgotPassword.hbs"
    );

    await etherialEmail.sendEmail({
      to: {
        name: user.name,
        address: user.email,
      },
      subject: "[API vendas] Recuperação de senha",
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token=${token}`,
        },
      },
    });
  }
}

export { ForgotPasswordService };
