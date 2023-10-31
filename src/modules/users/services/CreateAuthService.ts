import bcrypt from "bcryptjs";
import auth from "@config/auth";
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

    if (!passwordConfirm) {
      throw new Error("Usuário ou senha incorreto(s).");
    }

    const token = sign({}, auth.secretToken, {
      subject: user.id,
      expiresIn: auth.expiresToken,
    });

    return { token, user };
  }
}

export { CreateSessionsService };
