import express from "express";

const mainRouter = express.Router();

mainRouter.get("/health", (req, res) => {
  res.status(500).send("it s working");
});

export default mainRouter;
