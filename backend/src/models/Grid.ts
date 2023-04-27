import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg";

interface GridInterface extends Model {

    id: number,
    upper_limit: number,
    right_limit: number

};


export const Grid = sequelize.define<GridInterface>("grid", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    upper_limit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    right_limit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: "grid",
    timestamps: false
});