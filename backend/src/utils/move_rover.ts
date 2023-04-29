import { errors } from "../constants/errors";
import { success } from "../constants/success";

export const moveRover = (
    rover: {
      x_pos: number,
      y_pos: number,
      direction: "N" | "S" | "E" | "W" // Rover's direction can only be one of these four values
    },
    instruction: string // String containing the instructions for the rover's movement
  ) => {
    for (let char of instruction) { // Iterate over each character of the instruction string
  
      switch (char) {
        case "R": // If the instruction is "R", turn the rover to the right
            rotateFunctions.turnRight(rover)
            break;
        case "L": // If the instruction is "L", turn the rover to the left
            rotateFunctions.turnLeft(rover);
            break;
        case "M": // If the instruction is "M", move the rover forward
            rotateFunctions.moveForward(rover);
            break;
        default: // If the instruction is invalid, throw an error
            return {
                status: 400,
                error: {
                    title: errors.ROVER.not_moved.title,
                    description: errors.ROVER.not_moved.description
                }
            }
      }
    }

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
          
          moveForward: (rover: { x_pos: number, y_pos: number, direction: "N" | "S" | "E" | "W" }) => {
            switch (rover.direction) {
              case "N": // If the rover is facing north, move it one unit up (increment y coordinate)
                rover.y_pos++;
                break;
              case "E": // If the rover is facing east, move it one unit to the right (increment x coordinate)
                rover.x_pos++;
                break;
              case "S": // If the rover is facing south, move it one unit down (decrement y coordinate)
                rover.y_pos--;
                break;
              case "W": // If the rover is facing west, move it one unit to the left (decrement x coordinate)
                rover.x_pos--;
                break;
            }
          },

    } 