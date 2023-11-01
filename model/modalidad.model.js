import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Modalidad = sequelize.define('Modalidad', {
    id_modalidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    modalidad_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Modalidad",
    modelName: "Modalidad",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Modalidad.sync({ force: false }).then(() => {
    console.log('Tabla de Modalidad creada')
})