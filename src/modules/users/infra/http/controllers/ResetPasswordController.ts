import { ResetPasswordService } from "@modules/users/services/ResetPasswordService";
import { Request, Response } from "express";

class ResetPasswordController {
  async create(request: Request, response: Response) {
    const { token, password } = request.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({
      token,
      password,
    });

    return response.status(200).json();
  }
}

export { ResetPasswordController };
