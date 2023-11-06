import { Router } from "express";
import { ShowProfileController } from "../controllers/ShowProfileController";
import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated";

const profileRoutes = Router();

const userList = new ShowProfileController();

profileRoutes.get("/:id", isAuthenticated, userList.handle);

export { profileRoutes };
