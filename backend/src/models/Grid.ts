import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg";

interface GridInterface extends Model {

    id: number,
    x_limit: number,
    y_limit: number,
    title: string

};


export const Grid = sequelize.define<GridInterface>("grid", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    x_limit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    y_limit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }

}, {
    tableName: "grid",
    timestamps: false
});