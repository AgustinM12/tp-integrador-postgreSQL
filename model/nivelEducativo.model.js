import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { Modalidad } from "./modalidad.model.js";

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
    modalidad_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "NivelEducativo",
    modelName: "NivelEducativo",
});

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
NivelEducativo.sync({ force: false })

    // .then(async () => { 
    //     const count = await NivelEducativo.count();
    //     if (count === 0) {
    //         {
    //             await NivelEducativo.bulkCreate([
    //                 { modalidad_id: 1, nivelEducativo_nombre: "ec_mat", },
    //                 { modalidad_id: 1, nivelEducativo_nombre: "ec_jar", },
    //                 { modalidad_id: 1, nivelEducativo_nombre: "ec_pri", },
    //                 { modalidad_id: 1, nivelEducativo_nombre: "ec_sec", },
    //                 { modalidad_id: 1, nivelEducativo_nombre: "ec_sec_INET", },
    //                 { modalidad_id: 1, nivelEducativo_nombre: "ec_SNU", },
    //                 { modalidad_id: 1, nivelEducativo_nombre: "ec_SNU_INET", },
    //                 { modalidad_id: 1, nivelEducativo_nombre: "ec_SNU_cur", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "esp_tem", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "esp_ini", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "esp_pri", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "esp_sec", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "esp_int", },
    //                 { modalidad_id: 3, nivelEducativo_nombre: "ad_pri", },
    //                 { modalidad_id: 3, nivelEducativo_nombre: "ad_sec", },
    //                 { modalidad_id: 3, nivelEducativo_nombre: "ad_FP", },
    //                 { modalidad_id: 3, nivelEducativo_nombre: "ad_FP_INET", },
    //                 { modalidad_id: 3, nivelEducativo_nombre: "ad_alf", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "hos_ini", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "hos_pri", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "hos_sec", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "tall_art", },
    //                 { modalidad_id: 2, nivelEducativo_nombre: "ser_com", },
    //             ]);
    //         }
    //     }
    //     console.log('Tabla de NivelEducativo creada')
    // }); 