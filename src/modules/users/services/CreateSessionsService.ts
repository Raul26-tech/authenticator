import bcrypt from "bcryptjs";
import { User } from "../infra/typeorm/entities/User";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";

interface IRequest {
  email: string;
  password: string;
}

class CreateSessionsService {
  async execute({ email, password }: User) {
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

    return user;
  }
}

export { CreateSessionsService };
