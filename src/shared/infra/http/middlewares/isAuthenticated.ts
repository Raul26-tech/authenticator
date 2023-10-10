import auth from "@config/auth";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
  iat: string;
  exp: number;
  sub: string;
}

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

  try {
    const decodedToken = verify(token, auth.secretToken);

    const { sub } = decodedToken as unknown as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new Error(error);
  }
}
