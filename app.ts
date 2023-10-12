import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { router } from "./src/shared/infra/http/routes";
import { connectDatabase } from "@typeorm/index";
import upload from "@config/upload";

const app = express();
app.use(express.json());
app.use("/files", express.static(upload.directory));
app.use(router);

// Conectando ao banco de dados
connectDatabase();

export { app };
