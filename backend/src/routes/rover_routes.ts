import { Router } from "express";
import { rover_controller } from "../controllers/rover_controller";

const rover_router = Router();

rover_router.get('/', rover_controller.findAll);
rover_router.post('/', rover_controller.store);
rover_router.post('/move', rover_controller.move);
rover_router.get('/:id', rover_controller.find);

export default rover_router;