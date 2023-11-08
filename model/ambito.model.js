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

Ambito.sync({ force: false })
    .then(async () => {
        const count = await Ambito.count();
        if (count === 0) {
            {
                await Ambito.bulkCreate([
                    { ambito_nombre: "Rural", },
                    { ambito_nombre: "Urbano", }
                ]);
            }
        }
    });