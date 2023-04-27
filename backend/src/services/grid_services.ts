import { errors } from "../constants/errors";
import { success } from "../constants/success";
import { Grid } from "../models/Grid";

export const grid_services = {

    store: async (upper_limit: number, right_limit: number) => {

        try {

            const grid = await Grid.create({
                upper_limit: upper_limit,
                right_limit: right_limit
            });
    
            return {
                status: 201,
                title: success.GRID.created.title,
                description: success.GRID.created.description,
                data: grid
            };

        } catch (error) {

            return {
                status: 400,
                error: {
                    title: errors.GRID.not_created.title,
                    description: errors.GRID.not_created.description,
                    error: error
                }
            }

        }

    },

    find: async (id: number) => {

        const grid = await Grid.findByPk(id);

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
            title: errors.GRID.not_found.title,
            description: errors.GRID.not_found.description
        }

    }

}