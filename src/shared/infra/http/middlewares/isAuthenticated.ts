import auth from "@config/auth";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token inválido");
  }

  const [, token] = authHeader.split(" ");

  console.log(token);

  try {
    const decodeToken = verify(token, auth.secretToken);

    return next();
  } catch (error) {
    throw new Error(error);
  }
}
