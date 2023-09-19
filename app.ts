import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { router } from "./src/shared/infra/http/routes";
import { connectDatabase } from "@typeorm/index";

const app = express();

app.use(router);

// Conectando ao banco de dados
connectDatabase();

export { app };
