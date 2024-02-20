import { Request, Response, Router } from "express";

const usuarioRoutes = Router();

usuarioRoutes.get("/", (req: Request, res: Response) => {

    return res.send({
        id: 1,
        nome: "Alex",
        idade: 42
    })
});

export default usuarioRoutes