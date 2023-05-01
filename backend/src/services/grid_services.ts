// Import error and success messages and Grid model
import { errors } from "../constants/errors";
import { success } from "../constants/success";
import { Grid } from "../models/Grid";

// Define grid_services object
const grid_services = {

    // Define store method for creating a new grid
    async store(x_limit: number, y_limit: number, title: string) {

        try {

            // Attempt to find or create grid with specified title and limits
            const [grid, created] = await Grid.findOrCreate({
                where: { title },
                defaults: { x_limit, y_limit },
            });
            
            // If grid already exists, return error message
            if (!created) {

                return {
                    status: 400,
                    error: {
                        title: errors.GRID.name_already_exists.title,
                        description: errors.GRID.name_already_exists.description
                    }
                };
                
            }
            
            // If grid is successfully created, return success message and data
            return {
                status: 201,
                success: {
                    title: success.GRID.created.title,
                    description: success.GRID.created.description,
                    data: grid
                }
            };
      
        } catch (error) {
        
            // If there is an error during the creation process, return error message
            return {
                status: 400,
                error: {
                    title: errors.GRID.invalid_data.title,
                    description: errors.GRID.invalid_data.description,
                    error
                }
            };
            
        };

    },

    // Define find method for finding a grid by title
    async find(title: string) {

        // Find grid with specified title
        const grid = await Grid.findOne({ where: {title} });

        // If grid does not exist, return error message
        if (!grid) {

            return {
                status: 404,
                error: {
                    title: errors.GRID.not_found.title,
                    description: errors.GRID.not_found.description
                }
            };
            
        }

        // If grid is found, return success message and data
        return {
            status: 200,
            success: {
                title: success.GRID.found.title,
                description: success.GRID.found.description,
                data: grid
            }
        };

    },

    // Define findAll method for finding all grids
    async findAll() {

        // Find all grids
        const grids = await Grid.findAll();

        if (grids.length === 0) {

            return {
                status: 204
            }

        };

        // Return success message and data
        return {
            status: 200,
            success: {
            title: success.GRID.found.title,
            description:
                "The grid(s) was/were found in the provided coordinates.",
            data: grids
            }
        };

    },

    // Define delete method for deleting a grid by ID
    async delete(id: number) {

        // Find grid with specified ID
        const grid = await Grid.findByPk(id);

        // If grid does not exist, return error message
        if (!grid) {

            return {
                status: 404,
                error: {
                    title: errors.GRID.not_found.title,
                    description: errors.GRID.not_found.description
                }
            };
            
        }

        // If grid is found, delete it and return success message
        await grid.destroy();

        return {
            status: 204
        };

    }
};

export { grid_services };