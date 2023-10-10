import { productRoutes } from "@modules/products/infra/http/routes/products.routes";
import { authRoutes } from "@modules/users/infra/http/routes/auth.routes";
import { usersRoutes } from "@modules/users/infra/http/routes/user.routes";
import { Router } from "express";

const router = Router();

router.use("/products", productRoutes);
router.use("/users", usersRoutes);
router.use("/sessions", authRoutes);

export { router };
