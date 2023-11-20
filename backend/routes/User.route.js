import express from "express";
import {
  getUser,
  updateUser,
  userLogin,
} from "../controllers/User.controller.js";

const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.get("/:userId", getUser);
userRouter.patch("/:userId", updateUser);

export default userRouter; 