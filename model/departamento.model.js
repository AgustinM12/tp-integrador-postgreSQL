import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Departamento = sequelize.define('Departamento', {
    id_departamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    departamento_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Departamento",
    modelName: "Departamento",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Departamento.sync({ force: false }).then(() => {
    console.log('Tabla de Departamento creada')
})