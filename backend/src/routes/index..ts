import { Router } from "express";
import pizzasRouter from "./pizza.routes";

const routes = Router();

routes.use("/flavors", pizzasRouter);

export default routes;
