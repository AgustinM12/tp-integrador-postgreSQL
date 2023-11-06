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

export async function departamentoF() {
    Departamento.bulkCreate(
        { id_departamento: 34007, departamento_nombre: "BERMEJO", },
        { id_departamento: 34028, departamento_nombre: "MATACOS", },
        { id_departamento: 34056, departamento_nombre: "PIRANE", },
        { id_departamento: 34014, departamento_nombre: "FORMOSA", },
        { id_departamento: 34049, departamento_nombre: "PILCOMAYO", },
        { id_departamento: 34042, departamento_nombre: "PILAGAS", },
        { id_departamento: 34021, departamento_nombre: "LAISHI", },
        { id_departamento: 34063, departamento_nombre: "RAMON LISTA", },
        { id_departamento: 34035, departamento_nombre: "PATIÑO", },
    )
}