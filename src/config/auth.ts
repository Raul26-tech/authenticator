import dotenv from "dotenv";
import * as env from "env-var";

interface IAuth {
  secretToken: string;
  expiresToken: string;
}

dotenv.config({
  path: ".env",
});

export default {
  secretToken: env.get("AUTH_SECRET_TOKEN").required().asString(),
  expiresToken: env.get("AUTH_EXPIRES_TOKEN").required().asString(),
} as IAuth;
