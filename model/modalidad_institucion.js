import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Modalidad_institucion = sequelize.define('Modalidad_institucion', {
    id_modalidad_institucion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    modalidad_id: {
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
    tableName: "Modalidad_institucion",
    modelName: "Modalidad_institucion",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Modalidad_institucion.sync({ force: false }).then(() => {
    console.log('Tabla de Modalidad_institucion creada')
})