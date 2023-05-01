// Import necessary modules
import express from 'express';
import cors from 'cors';
import rover_routes from './routes/rover_routes';
import grid_routes from './routes/grid_routes';
import api_router from './routes/api_routes';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Sets api router to '/' path
app.use('/', api_router);
// Sets rover router to '/rover' path
app.use('/rover', rover_routes);
// Sets grid router to '/grid' path
app.use('/grid', grid_routes);

export default app;