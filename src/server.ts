/* eslint-disable no-console */
// import app from "./app";
import rabbitMqConnect from "./controller";

// app.listen(`${process.env.PORT}`, () => {
//   console.log(`Server listening on ${process.env.PORT}`);
// });

rabbitMqConnect()
  .then(() => {
    console.log("RabbitMQ consumer started");
  })
  .catch((error) => {
    console.error("Failed to start RabbitMQ consumer", error);
  });
