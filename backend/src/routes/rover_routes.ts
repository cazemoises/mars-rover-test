import { Router } from "express";
import { rover_controller } from "../controllers/rover_controller";

const rover_router = Router();

rover_router.get('/', rover_controller.findAll);
rover_router.post('/', rover_controller.store);
rover_router.post('/move', rover_controller.move);
rover_router.get('/filter-by-grid/:grid_id', rover_controller.findAllRoversInOneGrid);
rover_router.get('/:id', rover_controller.find);
rover_router.delete('/:id', rover_controller.delete);

export default rover_router;