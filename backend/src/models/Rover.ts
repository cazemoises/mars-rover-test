import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface RoverInterface extends Model {

    id: number,
    rover_label: string,
    x_pos: number,
    y_pos: number,
    direction: "N" | "E" | "S" | "W",
    grid_id: number

}

export const Rover = sequelize.define<RoverInterface>("rover", {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    rover_label: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    x_pos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    y_pos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    direction: {
        type: DataTypes.CHAR,
        allowNull: false 
    },
    grid_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},
{
    tableName: "rover",
    timestamps: false
})