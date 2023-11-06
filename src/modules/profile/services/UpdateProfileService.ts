import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";
import { IProfileDTO } from "../dto/IProfileDTO";
import { compare, hash } from "bcryptjs";

class UpdateProfileService {
  async execute({ id, name, email, password, old_password }: IProfileDTO) {
    const userRepository = new UserRepository();

    const user = await userRepository.findById(id);
    const updateEmail = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("O usuário informado não foi encontrado");
    }

    if (updateEmail && updateEmail.id !== user.id) {
      throw new Error("Já existe um usuário que utiliza este email");
    }

    if (password && !old_password) {
      throw new Error("É necessário informar a senha sua senha anterior");
    }

    if (password && old_password) {
      const checkPassword = await compare(old_password, user.password);

      if (!checkPassword) {
        throw new Error("A senha está incorreta");
      }

      user.password = await hash(password, 8);
    }
    user.name = name;
    user.email = email;
    await userRepository.save(user);

    return user;
  }
}

export { UpdateProfileService };
