import { productRoutes } from "@modules/products/infra/http/routes/products.routes";
import { usersRoutes } from "@modules/users/infra/http/routes/user.routes";
import { Router } from "express";

const router = Router();

router.use("/products", productRoutes);
router.use("/users", usersRoutes);

export { router };
