import { Router } from "express";
import { ShowProfileController } from "../controllers/ShowProfileController";
import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated";
import { UpdateProfileController } from "../controllers/UpdateProfileController";

const profileRoute = Router();

const showUser = new ShowProfileController();
const updateProfile = new UpdateProfileController();

profileRoute.use(isAuthenticated);
profileRoute.get("/:id", showUser.handle);
profileRoute.patch("/:id", updateProfile.handle);

export { profileRoute };
