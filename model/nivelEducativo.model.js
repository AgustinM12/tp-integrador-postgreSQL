import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const NivelEducativo = sequelize.define('NivelEducativo', {
    id_nivelEducativo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nivelEducativo_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "NivelEducativo",
    modelName: "NivelEducativo",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
NivelEducativo.sync({ force: false }).then(() => {
    console.log('Tabla de NivelEducativo creada')
})