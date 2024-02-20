import { Request, Response, Router } from "express";

const produtorRoutes = Router();

produtorRoutes.get("/", (req: Request, res: Response) => {

    return res.send({
        id: 1,
        nome: "Chuveiro",
        avaliacao: 4
    })
});

export default produtorRoutes