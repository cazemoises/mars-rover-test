import { Grid } from "../models/Grid";

export function checkGridLimits(x: number, y: number, grid: { x_limit: number; y_limit: number; }): boolean {
    
    const x_valid = x >= 0 && x <= grid.x_limit - 1;
    const y_valid = y >= 0 && y <= grid.y_limit - 1;

    return x_valid && y_valid;
    
}