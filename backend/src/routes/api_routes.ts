import { Router, Request, Response } from "express";
import { success } from "../constants/success";

const api_router = Router();

api_router.get('/', (req: Request, res: Response) => {

    return res.status(200).json({
        status: 200,
        title: success.SERVER.server_on.title
    })

});

export default api_router;