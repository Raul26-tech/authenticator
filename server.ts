import environment from "@config/environment";
import { app } from "./app";

app
  .listen(environment.PORT, () => {
    console.log(
      `\n\nWELCOME, SERVER IS RUNNING ON PORT ${environment.PORT} \n\n`
    );
  })
  .on("error", () => {
    console.log(
      `\n\nFAILURE, ON SERVER ON PORT ${environment.PORT}, VERY TRY AGAIN LATER \n\n\n`
    );
  });
