import { Router } from "express";
import { grid_controller } from "../controllers/grid_controller";

const grid_routes = Router();

grid_routes.post('/', grid_controller.store);
grid_routes.delete('/', grid_controller.delete);
grid_routes.get('/', grid_controller.findAll);
grid_routes.get('/:title', grid_controller.findByTitle)

export default grid_routes;