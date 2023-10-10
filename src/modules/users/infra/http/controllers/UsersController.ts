import { Request, Response } from "express";
import { CreateUserService } from "@modules/users/services/CreateUserService";

class UsersController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}

export { UsersController };
