import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export  const Institucion = sequelize.define('Institucion', {
    id_institucion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sector_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    localidad_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ambito_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Institucion",
    modelName: "Institucion",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Institucion.sync({ force: false }).then(() => {
    console.log('Tabla de Institucion creada')
})

