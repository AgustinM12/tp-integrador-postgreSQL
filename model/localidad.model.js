import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto

export const Localidad = sequelize.define('Localidad', {
    id_localidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    localidad_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cod_postal:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    departamento_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Localidad",
    modelName: "Localidad",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Localidad.sync({ force: false }).then(() => {
    console.log('Tabla de Localidad creada')
})