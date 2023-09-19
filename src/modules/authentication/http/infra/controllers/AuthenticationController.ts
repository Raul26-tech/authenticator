import { Request, Response } from "express";
import { AuthenticationServices } from "../../../services/AuthenticationService";

class AuthenticationController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authServices = new AuthenticationServices();
  }
}

export { AuthenticationController };
