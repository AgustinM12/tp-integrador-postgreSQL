import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Ambito = sequelize.define('Ambito', {
    id_ambito: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ambito_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Ambito",
    modelName: "Ambito",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Ambito.sync({ force: false }).then(() => {
    console.log('Tabla de Ambito creada')
})

export async function ambitoF() {
    Ambito.bulkCreate(
        { sector_nombre: "Rural", },
        { sector_nombre: "Urbano", },
    )
} 