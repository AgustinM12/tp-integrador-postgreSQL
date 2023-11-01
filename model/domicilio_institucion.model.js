import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Domicilio_institucion = sequelize.define('Domicilio_institucion', {
    id_domicilio_institucion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    domicilio_id: {
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
    tableName: "Domicilio_institucion",
    modelName: "Domicilio_institucion",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Domicilio_institucion.sync({ force: true }).then(() => {
    console.log('Tabla de Domicilio_institucion creada')
})