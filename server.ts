import environment from "@config/environment";
import { app } from "./app";

const port = environment.PORT;
console.log(port);

app
  .listen(port, () => {
    console.log(`\n\n\n WELCOME, SERVER IS RUNNING ON PORT ${port}`);
  })
  .on("error", () => {
    console.log(
      `\n\n\n FAILURE, ON SERVER ON PORT ${port}, VERY TRY AGAIN LATER`
    );
  });
