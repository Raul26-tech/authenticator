import path from "path";
import fs from "fs";
import upload from "@config/upload";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";

interface IRequest {
  userId: string;
  avatarFileName: string;
}

class UpdateUserAvatartService {
  async execute({ userId, avatarFileName }: IRequest) {
    const userRepository = new UserRepository();

    const user = await userRepository.findById(userId);

    if (!user) {
      throw new Error("Este usuário não existe");
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(upload.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;

    await userRepository.create(user);

    return user;
  }
}

export { UpdateUserAvatartService };
