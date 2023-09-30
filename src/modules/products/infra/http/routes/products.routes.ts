import { Router } from "express";
import { ListProductController } from "../controllers/ListProductController";
import { ListAllProductsController } from "../controllers/ListAllProductsController";
import { CreateProductController } from "../controllers/CreateProductController";
import { UpdateProductController } from "../controllers/UpdateProductController";
import { DeleteProductController } from "../controllers/DeleteProductController";

const productRoutes = Router();

const createProduct = new CreateProductController();
const listProduct = new ListProductController();
const listAllProducts = new ListAllProductsController();
const updateProduct = new UpdateProductController();
const deleteProduct = new DeleteProductController();

productRoutes.get("/:id", listProduct.handle);
productRoutes.get("/", listAllProducts.handle);
productRoutes.post("/", createProduct.handle);
productRoutes.patch("/:id", updateProduct.handle);
productRoutes.delete("/:id", deleteProduct.handle);

export { productRoutes };
