import { ShowProfileService } from "@modules/profile/services/ShowProfileService";
import { Request, Response } from "express";

class ShowProfileController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const showProfileService = new ShowProfileService();

    const user = await showProfileService.execute(id);

    return response.status(200).json(user);
  }
}

export { ShowProfileController };
