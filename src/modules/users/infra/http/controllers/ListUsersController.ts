import { ListUserService } from "@modules/users/services/ListUserService";
import { Request, Response } from "express";
import { User } from "../../typeorm/entities/User";

class ListUserController {
  async handle(request: Request, response: Response) {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.status(201).json(users);
  }
}

export { ListUserController };
