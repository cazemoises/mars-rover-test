import { Grid } from "../models/Grid";

export function checkGridLimits(x: number, y: number, grid: { right_limit: number; upper_limit: number; }): boolean {
    
    const x_valid = x >= 0 && x <= grid.right_limit;
    const y_valid = y >= 0 && y <= grid.upper_limit;

    return x_valid && y_valid;
    
}