import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import rover_routes from './routes/rover_routes';
import grid_routes from './routes/grid_routes';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/rover', rover_routes);
app.use('/grid', grid_routes);

export default app;