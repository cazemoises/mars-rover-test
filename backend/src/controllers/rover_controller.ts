import { Request, Response } from "express";

import { rover_services } from "../services/rover_services";
import { errors } from "../constants/errors";
import { Grid } from "../models/Grid";
import { checkGridLimits } from "../utils/check_grid_limits";

export const rover_controller = {

    async store(req: Request, res: Response) {

        const { x_pos, y_pos, direction, grid_id } = req.body;

        try {

            const grid = await Grid.findByPk(grid_id);

            if (!grid) {
                return res.status(404).json(errors.GRID.not_found);
            }

            if (!checkGridLimits(x_pos, y_pos, grid)) {
                return res.status(400).json(errors.ROVER.not_created);
            }

            const response = await rover_services.store(x_pos, y_pos, direction, grid_id);
            return res.status(response.status).json(response);

        } catch (error) {

            console.error(error);
            return res.status(500).json(errors.SERVER.internal_server_error);
            
        }
    },

    async find(req: Request, res: Response) {
      
        const id = parseInt(req.params.id);

        try {

            const response = await rover_services.find(id);

            return res.status(response?.status).json(response); 

        } catch (error) {

            console.error(error);
            return res.status(500).json(errors.SERVER.internal_server_error);

        }

    },

    async findAll(req: Request, res: Response) {

        const response = await rover_services.findAll();

        return res.status(response.status).json(response);

    },

    async move(req: Request, res: Response) {

        const { rover_id, grid_id, instruction } = req.body;

        const response = await rover_services.move(rover_id, grid_id, instruction);

        return res.status(response.status).json(response);

    }

}
