import multer from "multer";
import upload from "@config/upload";
import { Router } from "express";
import { UsersController } from "../controllers/UsersController";
import { ListUserController } from "../controllers/ListUsersController";
import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated";
import { UpdateUserAvatarController } from "../controllers/UpdateUserAvatarController";

const usersRoutes = Router();

const createUser = new UsersController();
const listUsers = new ListUserController();
const updateUseravatar = new UpdateUserAvatarController();

const uploadFile = multer(upload);

usersRoutes.get("/", isAuthenticated, listUsers.handle);
usersRoutes.post("/", createUser.handle);
usersRoutes.patch(
  "/avatar",
  isAuthenticated,
  uploadFile.single("avatar"),
  updateUseravatar.handle
);

export { usersRoutes };
