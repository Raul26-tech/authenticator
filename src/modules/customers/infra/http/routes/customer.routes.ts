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

customerRoutes.post("/", isAuthenticated, createCustomer.handle);
customerRoutes.get("/:id", isAuthenticated, showCustomer.handle);
customerRoutes.get("/", isAuthenticated, listCustomers.handle);
customerRoutes.patch("/:id", isAuthenticated, updateCustomer.handle);
customerRoutes.delete("/:id", isAuthenticated, deleteCustomer.handle);

export { customerRoutes };
