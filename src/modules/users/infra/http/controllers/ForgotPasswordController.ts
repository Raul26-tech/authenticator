import { ForgotPasswordService } from "@modules/users/services/ForgotPasswordService";
import { Request, Response } from "express";

class ForgotPasswordController {
  async create(request: Request, response: Response) {
    const { email } = request.body;
    const sendForgotPasswordEmail = new ForgotPasswordService();

    await sendForgotPasswordEmail.execute({ email });

    return response.status(204).json();
  }
}

export { ForgotPasswordController };
