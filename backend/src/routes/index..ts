import { Router } from "express";
import saboresRouter from "./sabores.routes";

const routes = Router();

routes.use("/sabores", saboresRouter);

export default routes;
