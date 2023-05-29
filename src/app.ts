import express from "express";
import dotenv from "dotenv";
// import mongoose, { ConnectOptions } from "mongoose";
import mainRouter from "./routes/api/mainRoute";

dotenv.config();

const app = express();

app.use(express.json());

// routes
app.use("/api/email", mainRouter);

// database connection
// mongoose
//   .connect(
//     process.env.MONGO_URI as string,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     } as ConnectOptions
//   )
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((error: Error) => {
//     console.log(`Database connection error: ${error.message}`);
//   });

export default app;
