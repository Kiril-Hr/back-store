import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = new Router();

userRouter.post("/registration", userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/auth", userController.check);

export default userRouter;
