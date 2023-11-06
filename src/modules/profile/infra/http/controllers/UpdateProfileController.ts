import { UpdateProfileService } from "@modules/profile/services/UpdateProfileService";
import { Request, Response } from "express";

class UpdateProfileController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password, old_password } = request.body;
    const updateProfileService = new UpdateProfileService();

    const userUpdated = await updateProfileService.execute({
      id,
      name,
      email,
      password,
      old_password,
    });

    return response.status(201).json(userUpdated);
  }
}

export { UpdateProfileController };
