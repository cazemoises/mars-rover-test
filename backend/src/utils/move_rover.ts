// Error and success constant messages
import { errors } from "../constants/errors";
import { success } from "../constants/success";
import { Rover } from "../models/Rover";
import { checkGridLimits } from "./check_grid_limits";

// This function moves the rover based on a set of instructions
export const moveRover = async (
        rover: {
        x_pos: number,
        y_pos: number,
        grid_id: number,
        direction: "N" | "S" | "E" | "W", // Rover's direction can only be one of these four values
        },
        x_limit: number,
        y_limit: number,
        instruction: string // String containing the instructions for the rover's movement
    ) => {

        let rover_copy = { x_pos: rover.x_pos, y_pos: rover.y_pos, direction: rover.direction, grid_id: rover.grid_id };

        for (let char of instruction) { // Iterate over each character of the instruction string
    
            switch (char) {

                case "R": // If the instruction is "R", turn the rover to the right
                    rotateFunctions.turnRight(rover_copy);
                    break;
                
                case "L": // If the instruction is "L", turn the rover to the left
                    rotateFunctions.turnLeft(rover_copy);
                    break;
                
                case "M": // If the instruction is "M", move the rover forward

                    const result = rotateFunctions.moveForward(rover_copy, x_limit, y_limit);
                
                    if (result?.status === 400) {
                
                        return result; // Return the error if the move is invalid
                
                    }
                    break;
                
                default: // If the instruction is invalid, throw an error
                
                    return {
                        status: 400,
                        error: {
                            title: errors.ROVER.invalid_instruction.title,
                            description: errors.ROVER.invalid_instruction.description
                        }
                    };
                    
            };

        };

        if (rover_copy.x_pos < 0 || rover_copy.x_pos > x_limit || rover_copy.y_pos < 0 || rover_copy.y_pos > y_limit) {

            return {
                status: 400,
                error: {
                    title: errors.ROVER.not_in_grid_limits.title,
                    description: errors.ROVER.not_in_grid_limits.description
                }
            };
            
        }

        const existingRover = await Rover.findOne({where: {x_pos: rover_copy.x_pos, y_pos: rover_copy.y_pos, grid_id: rover_copy.grid_id}});

        if (existingRover) {

            return {
                status: 400,
                error: {
                    title: errors.ROVER.position_occupied.title,
                    description: errors.ROVER.position_occupied.description
                }
            };

        };

        rover.x_pos = rover_copy.x_pos;
        rover.y_pos = rover_copy.y_pos;
        rover.direction = rover_copy.direction;

        return {
            status: 201,
            success: {
                title: success.ROVER.moved.title,
                description: success.ROVER.moved.description,
                data: rover
            }
        }

};

  
  
export const rotateFunctions = {

    turnRight: (rover: { direction: "N" | "S" | "E" | "W" }) => {
        
        switch (rover.direction) {
        
            case "N": // If the rover is facing north, turn it to the east
                rover.direction = "E";
                break;
        
            case "E": // If the rover is facing east, turn it to the south
                rover.direction = "S";
                break;
        
            case "S": // If the rover is facing south, turn it to the west
                rover.direction = "W";
                break;
        
            case "W": // If the rover is facing west, turn it to the north
                rover.direction = "N";
                break;
        
            }
            
    },
    
    turnLeft: (rover: { direction: "N" | "S" | "E" | "W" }) => {

        switch (rover.direction) {
        
            case "N": // If the rover is facing north, turn it to the west
                rover.direction = "W";
                break;
            
            case "E": // If the rover is facing east, turn it to the north
                rover.direction = "N";
                break;
            
            case "S": // If the rover is facing south, turn it to the east
                rover.direction = "E";
                break;
            
            case "W": // If the rover is facing west, turn it to the south
                rover.direction = "S";
                break;
                
        }

    },
    
    moveForward: (rover: { x_pos: number, y_pos: number, direction: "N" | "S" | "E" | "W" }, y_limit: number, x_limit: number) => {

        switch (rover.direction) {
            
            case "N": // If the rover is facing north, move it one unit up (increment y coordinate)
                if (!checkGridLimits(rover.x_pos, rover.y_pos + 1, {x_limit, y_limit})) {

                    return {
                        status: 400,
                        error: {
                            title: errors.ROVER.not_in_grid_limits.title,
                            description: errors.ROVER.not_in_grid_limits.description
                        }
                    }

                }
                
                rover.y_pos++;
                break;
            case "E": // If the rover is facing east, move it one unit to the right (increment x coordinate)
                if (!checkGridLimits(rover.x_pos + 1, rover.y_pos, {x_limit, y_limit})) {
                    return {
                        status: 400,
                        error: {
                            title: errors.ROVER.not_in_grid_limits.title,
                            description: errors.ROVER.not_in_grid_limits.description
                        }
                    }
                }
                rover.x_pos++;
                break;

            case "S": // If the rover is facing south, move it one unit down (decrement y coordinate)
            if (!checkGridLimits(rover.x_pos, rover.y_pos - 1, {x_limit, y_limit})) {
                    return {
                        status: 400,
                        error: {
                            title: errors.ROVER.not_in_grid_limits.title,
                            description: errors.ROVER.not_in_grid_limits.description
                        }
                    }
                }
                rover.y_pos--;
                break;

            case "W": // If the rover is facing west, move it one unit to the left (decrement x coordinate)
            if (!checkGridLimits(rover.x_pos - 1, rover.y_pos, {x_limit, y_limit})) {

                    return {
                        status: 400,
                        error: {
                            title: errors.ROVER.not_in_grid_limits.title,
                            description: errors.ROVER.not_in_grid_limits.description
                        }
                    };
                    
                };
                rover.x_pos--;
                break;

        };
    },

} 