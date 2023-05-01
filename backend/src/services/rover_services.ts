import { Rover } from "../models/Rover";

import { success } from "../constants/success";
import { errors } from "../constants/errors";
import { Grid } from "../models/Grid";
import { moveRover } from "../utils/move_rover";
import { Op } from "sequelize";

export const rover_services = {

// Function to store rover's data
store: async (
    rover_label: string,
    x_pos: number,
    y_pos: number,
    direction: "N" | "S" | "E" | "W",
    grid_id: number
) => {

    // Checking if direction is valid
    if (!["N", "S", "E", "W"].includes(direction)) {
        return {
            status: 400,
            error: {
                title: errors.MOVE.invalid_direction.title,
                description: errors.MOVE.invalid_direction.description,
            }
        }
    }

    // Finding or creating rover with given coordinates and grid id
    const [rover, created] = await Rover.findOrCreate({
        where: {
            [Op.or]: 
            [
                {x_pos: x_pos,
                y_pos: y_pos,
                grid_id: grid_id},
                {rover_label: rover_label,
                grid_id: grid_id
                }
            ]
        },
        defaults: {
            x_pos: x_pos,
            y_pos: y_pos,
            grid_id: grid_id,
            rover_label: rover_label,
            direction: direction
        }
    });

    // Checking if rover is created or already exists
    if (!created) {
        return {
            status: 400,
            error: {
                title: errors.ROVER.rover_already_landed.title,
                description: errors.ROVER.rover_already_landed.description,
            }
        }
    }

    // Returning successful response with rover's data
    return {
        status: 201,
        success: {
            title: success.ROVER.created.title,
            description: success.ROVER.created.description,
            data: rover
        }
    }
},

// Function to find a rover with given id
find: async (id: number) => {

    // Finding rover with given id
    const rover = await Rover.findByPk(id);

    // Checking if rover is found and returning response accordingly
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

    // Returning error response if rover is not found
    return {
        status: 404,
        error: {
            title: errors.ROVER.not_found.title,
            description: errors.ROVER.not_found.description,
        }
    }
},

// Function to find all rovers
findAll: async () => {

    // Finding all rovers
    const rovers = await Rover.findAll();

    // Checking if any rover exists and returning response accordingly
    if (rovers.length === 0) {
        return {
            status: 404,
            error: {
                title: errors.ROVER.no_rovers_stored.title,
                description: errors.ROVER.no_rovers_stored.description
            }
        }
    }

    // Returning successful response with all rovers' data
        return {
            status: 200,
            success: {
                title: success.ROVER.found.title,
                description: success.ROVER.found.description,
                data: rovers
            }
        };

    },

    // Function to find all rovers in a grid
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
    
    // Function to move a rover
    move: async (
        rover_id: number,
        grid_id: number,
        instruction: string
        ) => {

        // Find rover and grid by their ids
        const rover = await Rover.findByPk(rover_id);
        const grid = await Grid.findByPk(grid_id);

        // If rover is not found, return a 404 error
        if (!rover) {

            return {
                status: 404,
                error: {
                    title: errors.ROVER.not_found.title,
                    description: errors.ROVER.not_found.description
                }
            }

        }

        // If grid is not found, return a 404 error
        if (!grid) {

            return {
                status: 404,
                error: {
                    title: errors.GRID.not_found.title,
                    description: errors.GRID.not_found.description
                }
            }

        }

        // Move the rover with the given instruction
        const response = await moveRover(rover, grid.x_limit, grid.y_limit, instruction);

        console.log(response);

        // If the rover's position was updated, save it to the database
        response.status === 201 && rover.save();

        // Return the response
        return response;

    },

    // Function to delete a rover
    deleteRover: async (id: number) => {

        // Find the rover by its id
        const rover = await Rover.findByPk(id);

        // If rover exists, delete it from the database and return a 204 status code
        if (rover) {
            
            rover.destroy();

            return {
                status: 204
            };
            
        };

        // If rover is not found, return a 404 error
        return {
            status: 404,
            error: {
                title: errors.ROVER.not_found.title,
                description: errors.ROVER.not_found.description
            }
        }

    }

};