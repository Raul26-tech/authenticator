import { Router } from "express";
import { UsersController } from "../controllers/UsersController";
import { ListUserController } from "../controllers/ListUsersController";
import { AuthController } from "../controllers/AuthController";

const usersRoutes = Router();

const createUser = new UsersController();
const listUsers = new ListUserController();

usersRoutes.get("/", listUsers.handle);
usersRoutes.post("/", createUser.handle);

export { usersRoutes };
