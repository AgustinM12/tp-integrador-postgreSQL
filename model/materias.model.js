import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Materias = sequelize.define('Materias', {
    id_materias: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    materias_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    plan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Materias",
    modelName: "Materias",
});

Materias.sync({ force: false }).then(() => {
    console.log('Tabla de Materias creada')
})