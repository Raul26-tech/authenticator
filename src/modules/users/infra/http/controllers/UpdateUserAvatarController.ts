import { UpdateUserAvatartService } from "@modules/users/services/UpdateUserAvatarService";
import { Request, Response } from "express";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const updateAvatar = new UpdateUserAvatartService();

    const user = updateAvatar.execute({
      userId: request.user.id,
      avatarFileName: request.file.filename,
    });

    return response.status(200).json(user);
  }
}

export { UpdateUserAvatarController };
