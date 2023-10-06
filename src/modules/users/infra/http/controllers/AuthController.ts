import { CreateSessionsService } from "@modules/users/services/CreateAuthService";
import { Request, Response } from "express";

class AuthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const userService = new CreateSessionsService();

    const authenticatedUser = await userService.execute({
      email,
      password,
    });

    return response.status(200).json(authenticatedUser);
  }
}

export { AuthController };
