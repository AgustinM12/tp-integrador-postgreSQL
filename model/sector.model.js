import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const Sector = sequelize.define('Sector', {
    id_sector: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    sector_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Sector",
    modelName: "Sector",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Sector.sync({ force: false })
    .then(async () => {
        const count = await Sector.count();
        if (count === 0) {
            {
                await Sector.bulkCreate([
                    { sector_nombre: "Estatal", },
                    { sector_nombre: "Privado", } ,
                    { sector_nombre: "Social/cooperativa", },
                ]);
            }
        }
    });