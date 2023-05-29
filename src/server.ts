/* eslint-disable no-console */
// import app from "./app";
import rabbitMqConnect from "./controller";

// const port = process.env.PORT as string | 5001;

// app.listen(port, () => {
//   console.log(`Server listening on ${port}`);
// });

// app.listen(port, () => {
//   console.log(`Server listening on ${port}`);
// });

rabbitMqConnect()
  .then(() => {
    console.log("RabbitMQ consumer started");
  })
  .catch((error) => {
    console.error("Failed to start RabbitMQ consumer", error);
  });
