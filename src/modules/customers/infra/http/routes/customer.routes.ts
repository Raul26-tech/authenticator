import { Router } from "express";
import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated";
import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { ListCustomersController } from "../controllers/ListCustomersController";
import { ShowCustomerController } from "../controllers/ShowCustomerController";
import { UpdateCustomerController } from "@modules/customers/infra/http/controllers/UpdateCustomerController";
import { DeleteCustomerController } from "../controllers/DeleteCustomerController";

const customerRoutes = Router();

const createCustomer = new CreateCustomerController();
const listCustomers = new ListCustomersController();
const showCustomer = new ShowCustomerController();
const updateCustomer = new UpdateCustomerController();
const deleteCustomer = new DeleteCustomerController();

customerRoutes.use(isAuthenticated);
customerRoutes.post("/", createCustomer.handle);
customerRoutes.patch("/:id", updateCustomer.handle);
customerRoutes.delete("/:id", deleteCustomer.handle);
customerRoutes.get("/:id", showCustomer.handle);
customerRoutes.get("/", listCustomers.handle);

export { customerRoutes };
