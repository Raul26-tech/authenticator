import { Router } from "express";
import { customerRoutes } from "@modules/customers/infra/http/routes/customer.routes";
import { productRoutes } from "@modules/products/infra/http/routes/products.routes";
import { profileRoute } from "@modules/profile/infra/http/routes/profileUser.routes";
import { authRoutes } from "@modules/users/infra/http/routes/auth.routes";
import { passwordRouter } from "@modules/users/infra/http/routes/password.routes";
import { usersRoutes } from "@modules/users/infra/http/routes/user.routes";
import { orderRoutes } from "@modules/orders/infra/http/routes/orders.routes";

const router = Router();

router.use("/sessions", authRoutes);
router.use("/users", usersRoutes);
router.use("/profile", profileRoute);
router.use("/password", passwordRouter);
router.use("/reset", passwordRouter);
router.use("/products", productRoutes);
router.use("/customers", customerRoutes);
router.use("/orders", orderRoutes);

export { router };
