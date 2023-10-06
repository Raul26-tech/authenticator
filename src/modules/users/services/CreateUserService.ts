import bcrypt from "bcryptjs";
import { ICreateUSerDTO } from "../dto/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";

class CreateUserService {
  async execute({ name, email, password }: ICreateUSerDTO): Promise<User> {
    const userRepository = new UserRepository();

    const emailExists = await userRepository.findByEmail(email);

    if (emailExists) {
      throw new Error(
        "Usuário inválido, esse usuário já possuí uma conta com esse e-mail !"
      );
    }

    // Criptografando a senha antes de criar o usuário
    const hashedPassword = await bcrypt.hash(password, 8);

    console.log(hashedPassword);

    const user = await userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export { CreateUserService };
