import { productRoutes } from "@modules/products/infra/http/routes/products.routes";
import { Router } from "express";

const router = Router();

router.use("/products", productRoutes);

export { router };
