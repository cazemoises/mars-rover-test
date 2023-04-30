import { errors } from "../constants/errors";
import { success } from "../constants/success";
import { Grid } from "../models/Grid";

export const grid_services = {

    store: async (x_limit: number, y_limit: number, title: string) => {

        console.log (x_limit, y_limit, title);

        try {

            const [grid, created] = await Grid.findOrCreate({
                where: {
                    title: title
                },
                defaults: {
                    x_limit: x_limit,
                    y_limit: y_limit
                }
            });
    
            if (!created) {
    
                return {
                    status: 400,
                    error: {
                        title: errors.GRID.name_already_exists.title,
                        description: errors.GRID.name_already_exists.description
                    }
                }
    
            }
    
            return {
                status: 201,
                success: {
                    title: success.GRID.created.title,
                    description: success.GRID.created.description,
                    data: grid
                }
            };

        } catch (error) {

            return {
                status: 400,
                error: {
                    title: errors.GRID.invalid_data.title,
                    description: errors.GRID.invalid_data.description,
                    error: error
                }
            }

        }

    },

    find: async (title: string) => {

        const grid = await Grid.findOne({
            where: {
                title: title
            }
        });

        if (!grid) {

            return {
                status: 404,
                error: {
                    title: errors.GRID.not_found.title,
                    description: errors.GRID.not_found.description
                }
            }

        }

        return {
            status: 200,
            success: {
                title: success.GRID.found.title,
                description: success.GRID.found.description,
                data: grid
            }
        }

    },
    
    findAll: async () => {

        const grids = await Grid.findAll();

        return {
            status: 200,
            success: {
                title: success.GRID.found.title,
                description: "The grid(s) was/were found in the provided coordinates.",
                data: grids
            }
        }

    },

    delete: async (id: number) => {

        const grid = await Grid.findByPk(id);

        if (grid) {

            await grid.destroy();

            return {
                status: 204
            }

        }

        return {
            status: 404,
            error: {
                title: errors.GRID.not_found.title,
                description: errors.GRID.not_found.description
            }
        }

    }

}