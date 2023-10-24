import { ForgotPasswordService } from "@modules/users/services/ForgotPasswordService";
import { Request, Response } from "express";

class ForgotPasswordController {
  async handle(request: Request, response: Response) {
    const { email } = request.body;
    const sendForgotPasswordEmail = new ForgotPasswordService();

    const newGenerateToken = await sendForgotPasswordEmail.execute(email);
  }
}

export { ForgotPasswordController };
