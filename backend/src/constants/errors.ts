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
        no_rovers_stored: {
            title: "No rovers existing.",
            description: "There are no rovers landed on this grid."
        },
        not_in_grid_limits: {
            title: "The rover is not within the grid boundaries.",
            description: "The coordinate values must be greater than 0 and less than the grid limits."
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
        title_already_exists: {
            title: "Error creating grid.",
            description: "A grid with the provided title already exists."
        },
        name_already_exists: {
            title: "The given name is already in use.",
            description: "There is already a grid with the provided label stored in the database."
        },
        invalid_data: {
            title: "The provided data is not valid.",
            description: "Check the provided info again and be sure there is nothing wrong."
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
    },
    MOVE: {
        invalid_direction: {
            title: "Invalid direction.",
            description: "The provided direction is invalid. The allowed values are 'N', 'S', 'E', or 'W'."
        },
    }

};