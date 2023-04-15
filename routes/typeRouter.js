import { Router } from "express";
import typeController from "../controllers/typeController.js";

const typeRouter = new Router();

typeRouter.post("/", typeController.create);
typeRouter.get("/", typeController.getAll);

export default typeRouter;
