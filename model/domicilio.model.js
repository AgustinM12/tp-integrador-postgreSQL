import { DataTypes } from "sequelize";
import sequelize from "../db.js";
// Definir el modelo para la tabla contacto
export const DomicilioInst = sequelize.define('Domicilio', {
    id_domicilio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    domicilio_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Domicilio",
    modelName: "Domicilio",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
DomicilioInst.sync({ force: false }).then(() => {
    console.log('Tabla de Domicilio creada')
})