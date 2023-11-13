import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Plan = sequelize.define('Plan', {
    id_plan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    plan_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoPlan: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Plan",
    modelName: "Plan",
});

Plan.sync({ force: false }).then(() => {
    console.log('Tabla de Plan creada')
})