import { Rover } from "../models/Rover";

import { success } from "../constants/success";
import { errors } from "../constants/errors";
import { Grid } from "../models/Grid";
import { moveRover } from "../utils/move_rover";
import { grid_services } from "./grid_services";

export const rover_services = {

    store: async (
        rover_label: string,
        x_pos: number,
        y_pos: number,
        direction: "N" | "S" | "E" | "W",
        grid_id: number
    ) => {

        if (!["N", "S", "E", "W"].includes(direction)) {
            return {
                status: 400,
                error: {
                    title: errors.MOVE.invalid_direction.title,
                    description: errors.MOVE.invalid_direction.description,
                }
            }
        }

        const [rover, created] = await Rover.findOrCreate({
            where: {
                x_pos: x_pos,
                y_pos: y_pos,
                grid_id: grid_id
            },
            defaults: {
                rover_label: rover_label,
                direction: direction
            }
        });

        if (!created) {

            return {
                status: 400,
                error: {
                    title: errors.ROVER.rover_already_landed.title,
                    description: errors.ROVER.rover_already_landed.description,
                }
            }

        }

        return {
            status: 201,
            success: {
                title: success.ROVER.created.title,
                description: success.ROVER.created.description,
                data: rover
            }
        }


    },

    find: async (id: number) => {

        const rover = await Rover.findByPk(id);

        if (rover) {

            return {
                status: 200,
                success: {
                    title: success.ROVER.found.title,
                    description: success.ROVER.found.description,
                    data: rover
                }
            };

        }

        return {
            status: 404,
            error: {
                title: errors.ROVER.not_found.title,
                description: errors.ROVER.not_found.description,
            }
        }

    },

    findAll: async () => {

        const rovers = await Rover.findAll();

        if (rovers.length === 0) {

            return {
                status: 404,
                error: {
                    title: errors.ROVER.no_rovers_stored.title,
                    description: errors.ROVER.no_rovers_stored.description
                }
            }

        }

        return {
            status: 200,
            success: {
                title: success.ROVER.found.title,
                description: success.ROVER.found.description,
                data: rovers
            }
        };

    },

    findAllRoversInOneGrid: async (grid_id: number) => {

        const rovers = await Rover.findAll({
            where: {
                grid_id: grid_id
            }
        });

        if (rovers.length === 0) {

            return {
                status: 204
            }

        }

        return {
            status: 200,
            success: {
                title: success.ROVER.found.title,
                description: success.ROVER.found.description,
                data: rovers
            }
        };

    },
    
    move: async (
        rover_id: number,
        grid_id: number,
        instruction: string
        ) => {

        const rover = await Rover.findByPk(rover_id);
        const grid = await Grid.findByPk(grid_id);

        if (!rover) {

            return {
                status: 404,
                error: {
                    title: errors.ROVER.not_found.title,
                    description: errors.ROVER.not_found.description
                }
            }

        }

        if (!grid) {

            return {
                status: 404,
                error: {
                    title: errors.GRID.not_found.title,
                    description: errors.GRID.not_found.description
                }
            }

        }

        const response = moveRover(rover, instruction);

        if (response.success) {

            rover.save();

        }

        return response;

    },

    deleteRover: async (id: number) => {

        const rover = await Rover.findByPk(id);

        if (rover) {
            
            rover.destroy();
    
            return {
                status: 204
            }
            
        }

        return {
            status: 404,
            title: errors.ROVER.not_found.title,
            description: errors.ROVER.not_found.description
        }

    },    

};