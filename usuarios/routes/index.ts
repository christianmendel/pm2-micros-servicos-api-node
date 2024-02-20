import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes";

const routes = Router();

routes.use(usuarioRoutes);

export default routes;