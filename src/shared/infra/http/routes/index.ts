import { Router } from "express";

const router = Router();

router.use("/", () => {
  console.log("Hello world");
});

export { router };
