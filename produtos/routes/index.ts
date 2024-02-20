import { Router } from "express";
import produtorRoutes from "./produtoRoutes";

const routes = Router();

routes.use(produtorRoutes);

export default routes;