import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Nivel_institucion = sequelize.define('Nivel_institucion', {
    id_nivel_institucion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    nivelEducativo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    institucion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Nivel_institucion",
    modelName: "Nivel_institucion",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Nivel_institucion.sync({ force: true }).then(() => {
    console.log('Tabla de Nivel_institucion creada')
})