import { DataTypes, STRING } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto

export const Alumno = sequelize.define('Alumno', {
    id_alumno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    institucion_id: {
        type: DataTypes.INTEGER,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nacionalidad: {
        type: DataTypes.STRING,
    },
    fecha_ingreso: {
        type: DataTypes.DATEONLY,
    },
    tutor: {
        type: DataTypes.STRING,
    },
    plan_id: {
        type: DataTypes.INTEGER,
    },
    cicloLectivo: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Alumno",
    modelName: "Alumno",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Alumno.sync({ force: false }).then(() => {
    console.log('Tabla de Alumno creada')
})