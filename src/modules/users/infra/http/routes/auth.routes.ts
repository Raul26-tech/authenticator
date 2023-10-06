import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const authRoutes = Router();

const authUser = new AuthController();

authRoutes.post("/", authUser.handle);

export { authRoutes };
