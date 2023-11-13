import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Historial = sequelize.define('Historial', {
    id_historial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    nombre_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    materias_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    trimestre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cuatrimestre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nota: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    anio: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Historial",
    modelName: "Historial",
});

Historial.sync({ force: false }).then(() => {
    console.log('Tabla de Historial creada')
})