/**
 * Constant that contains error messages for entities rover and grid (plateau).
 * The messages contain title and description
*/
export const errors = {
    SERVER: {
        internal_server_error: {
            title: "An error has ocurred with the server.",
            descripition: "An error ocurred with the server, please try again later."
        }
    },
    ROVER: {
        not_found: {
            title: "Rover not found.",
            description: "It was not possible to find a rover with the provided information."
        },
        invalid_direction: {
            title: "Invalid direction.",
            description: "The provided direction is invalid. The allowed values are 'N', 'S', 'E', or 'W'."
        },
        not_created: {
            title: "Error creating rover.",
            description: "It was not possible to create the rover with the provided information. Check if the coordinates are within the grid.",
        },
        rover_already_landed: {
            title: "Coordinades not available.",
            description: "There is already a rover landed on the provided information."
        },
        not_updated: {
            title: "Error updating rover coordinates.",
            description: "It was not possible to update the rover coordinates. Check if the given data are correct.",
        },
        not_deleted: {
            title: "Error deleting rover.",
            description: "It was not possible to delete the rover. Check if the rover exists and try again.",
        },
        not_moved: {
            title: "Error moving rover.",
            description: "It was not possible to move the rover according to the provided instructions. Check if the coordinates are within the grid and if the direction is correct.",
        },
    },
    GRID: {
        not_found: {
            title: "Grid not found.",
            description: "A grid with the provided information was not found."
        },
        not_created: {
            title: "Error creating grid.",
            description: "It was not possible to create the grid with the provided information. Check if the coordinates are correct and try again.",
        },
        not_updated: {
            title: "Error updating grid coordinates.",
            description: "It was not possible to update the grid coordinates. Check if the coordinates are correct and try again.",
        },
        not_deleted: {
            title: "Error deleting grid.",
            description: "It was not possible to delete the grid. Check if the grid exists and try again.",
        },
    }

};