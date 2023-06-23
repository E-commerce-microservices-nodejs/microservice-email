/* eslint-disable no-console */
<<<<<<< HEAD
import app from "./app";
import rabbitMqConnect from "./controller";

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
=======
// import app from "./app";
import rabbitMqConnect from "./controller";

// app.listen(`${process.env.PORT}`, () => {
//   console.log(`Server listening on ${process.env.PORT}`);
// });
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093

rabbitMqConnect()
  .then(() => {
    console.log("RabbitMQ consumer started");
  })
  .catch((error) => {
    console.error("Failed to start RabbitMQ consumer", error);
  });
