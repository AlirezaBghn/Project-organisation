import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/index.js";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";
// import { userRouter, postRouter } from "./models/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8094;

app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);

sequelize.sync();
app.listen(port, () => console.log(`Server is running on port ${port}`));
