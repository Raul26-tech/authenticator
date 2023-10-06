import bcrypt from "bcryptjs";
import { User } from "../infra/typeorm/entities/User";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: User;
}

class CreateSessionsService {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const createSession = new UserRepository();
    const user = await createSession.findByEmail(email);

    if (!user) {
      throw new Error("Usuário ou senha incorreto(s).");
    }

    const passwordConfirm = bcrypt.compare(password, user.password);
    console.log(passwordConfirm);

    if (!passwordConfirm) {
      throw new Error("Usuário ou senha incorreto(s).");
    }

    const token = sign({}, "1d72490512d80cf240951eccf0f45c78", {
      subject: user.id,
      expiresIn: "1d",
    });

    return { token, user };
  }
}

export { CreateSessionsService };
