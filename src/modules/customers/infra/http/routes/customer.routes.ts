import { Router } from "express";
import { CreateCustomerController } from "../controllers/CreateCustomerController";
import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated";

const customerRoutes = Router();

const createCustomer = new CreateCustomerController();

customerRoutes.post("/", isAuthenticated, createCustomer.handle);

export { customerRoutes };
