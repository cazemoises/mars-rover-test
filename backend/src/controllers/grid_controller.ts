// Import necessary modules
import { Request, Response } from "express";
import { grid_services } from "../services/grid_services";
import { errors } from "../constants/errors";

// Exporting an object with functions that define the behavior of the grid controller
export const grid_controller = {

    // Function to create a new grid
    store: async (req: Request, res: Response) => {

        const {x_limit, y_limit, title } = req.body;

        try {
        
            const response = await grid_services.store(x_limit, y_limit, title);
            return res.status(response.status).json(response);
        
        } catch (error) {
        
            // If there's an error, return an internal server error
            return res.status(500).json(errors.SERVER.internal_server_error);
        
        }
        
    },

    // Function to find all grids
    findAll: async (req: Request, res: Response) => {
    
        try {
    
            const response = await grid_services.findAll();
            return res.status(response.status).json(response);
    
        } catch (error) {
    
            // If there's an error, return an internal server error
            return res.status(500).json(errors.SERVER.internal_server_error);
    
        }
    
    },

    // Function to find a grid by its title
    findByTitle: async(req: Request, res: Response) => {
    
        const {title} = req.params;

        try {
    
            const response = await grid_services.find(title);
            return res.status(response.status).json(response);
    
        } catch (error) {
    
            // If there's an error, return an internal server error
            return res.status(500).json(errors.SERVER.internal_server_error);
    
        }
    
    },

    // Function to delete a grid
    delete: async (req: Request, res: Response) => {
    
        const id: number = req.body;
        
        try {
    
            const response = await grid_services.delete(id);
            return res.status(response.status).json(response);
    
        } catch (error) {
    
            // If there's an error, return an internal server error
            return res.status(500).json(errors.SERVER.internal_server_error);
    
        }
    
    }

};