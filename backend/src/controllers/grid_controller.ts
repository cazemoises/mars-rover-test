import { Request, Response } from "express";
import { grid_services } from "../services/grid_services";
import { errors } from "../constants/errors";

export const grid_controller = {

    store: async (req: Request, res: Response) => {

        const { upper_limit, right_limit } = req.body;

        try {

            const response = await grid_services.store(upper_limit, right_limit);

            return res.status(response.status).json(response);

        } catch (error) {

            return res.status(500).json(errors.SERVER.internal_server_error)

        }

    },

    findAll: async (req: Request, res: Response) => {

        try {

            const response = await grid_services.findAll();

            return res.status(response.status).json(response);

        } catch (error) {

            return res.status(500).json(errors.SERVER.internal_server_error)

        }

    },

    delete: async (req: Request, res: Response) => {

        const id: number = req.body;
        
        try {

            const response = await grid_services.delete(id);
            return res.status(response.status).json(response);

        } catch (error) {

            return res.status(500).json(errors.SERVER.internal_server_error)

        }
        
    }

}