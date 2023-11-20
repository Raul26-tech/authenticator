import { Router } from "express";
import { CreateOrderController } from "../controllers/CreateOrderController";
import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated";
import { ShowOrderController } from "../controllers/ShowOrderController";

const orderRoutes = Router();

const createOrderController = new CreateOrderController();
const showOrderController = new ShowOrderController();

orderRoutes.use(isAuthenticated);
orderRoutes.post("/", createOrderController.handle);
orderRoutes.get("/:id", showOrderController.handle);

export { orderRoutes };
