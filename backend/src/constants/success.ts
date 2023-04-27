/**
 * Constant that contains success messages to entities rover, server and grid (plateau).
 * The messages contain title and description
*/
export const success = {

    SERVER: {
        server_on: {
            title: "Connection with server established successfully.",
            description: "The server is active and ready to receive requests.",
        },
    },
    ROVER: {
        created: {
            title: "Rover created successfully.",
            description: "The rover was created with the provided coordinates and direction.",
        },
        found: {
            title: "Rover(s) found successfully.",
            description: "The rover(s) was/were found in the provided coordinates and direction.",
        },
        updated: {
            title: "Rover coordinates updated successfully.",
            description: "The coordinates and direction of the rover were updated successfully.",
        },
        deleted: {
            title: "Rover deleted successfully.",
            description: "The rover was successfully deleted from the system.",
        },
        moved: {
            title: "Rover moved successfully.",
            description: "The rover was successfully moved according to the received instructions.",
        },
    },
    GRID: {
        found: {
            title: "Grid(s) found successfully.",
            description: "The grid(s) was/were found in the provided coordinates."
        },
        created: {
            title: "Grid created successfully.",
            description: "The grid was created with the provided coordinates.",
        },
        updated: {
            title: "Grid coordinates updated successfully.",
            description: "The coordinates of the grid were updated successfully.",
        },
        deleted: {
            title: "Grid deleted successfully.",
            description: "The grid was successfully deleted from the system.",
        },
    }

};