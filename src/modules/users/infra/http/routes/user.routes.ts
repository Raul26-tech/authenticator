import { Router } from "express";
import { UsersController } from "../controllers/UsersController";
import { ListUserController } from "../controllers/ListUsersController";
import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated";

const usersRoutes = Router();

const createUser = new UsersController();
const listUsers = new ListUserController();

usersRoutes.get("/", isAuthenticated, listUsers.handle);
usersRoutes.post("/", createUser.handle);

export { usersRoutes };
