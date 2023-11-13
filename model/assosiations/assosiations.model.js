import { Localidad } from "../localidad.model.js";
import { Institucion } from "../institucion.model.js";
import { Departamento, } from "../departamento.model.js";
import { Sector, } from "../sector.model.js";
import { Modalidad } from "../modalidad.model.js";
import { Ambito, } from "../ambito.model.js";
import { NivelEducativo } from "../nivelEducativo.model.js";
import { Nivel_institucion } from "../nivel_institucion.model.js";
import { Plan } from "../plan.model.js";
import { Materias } from "../materias.model.js";
import { Historial } from "../historial.model.js";
import { Alumno } from "../alumno.model.js";

Institucion.belongsTo(Sector, { foreignKey: "sector_id", as: "sector" })
Sector.hasMany(Institucion, { foreignKey: "sector_id", as: "sector" })

Institucion.belongsTo(Ambito, { foreignKey: "ambito_id", as: "ambito" })
Ambito.hasMany(Institucion, { foreignKey: "ambito_id", as: "ambito" })

Institucion.belongsTo(Localidad, { foreignKey: "localidad_id", as: "localidad" })
Localidad.hasMany(Institucion, { foreignKey: "localidad_id", as: "localidad" })

Localidad.belongsTo(Departamento, { foreignKey: "departamento_id", as: "departamento" })
Departamento.hasMany(Localidad, { foreignKey: "departamento_id", as: "departamento" })

NivelEducativo.belongsTo(Modalidad, { foreignKey: "modalidad_id", as: "modalidad" })
Modalidad.hasMany(NivelEducativo, { foreignKey: "modalidad_id", as: "modalidad" })

Materias.belongsTo(Plan, { foreignKey: "plan_id", as: "plan" })
Plan.hasMany(Materias, { foreignKey: "plan_id", as: "plan" })

Alumno.belongsTo(Institucion, { foreignKey: "institucion_id", as: "institucion" })
Institucion.hasMany(Alumno, { foreignKey: "institucion_id", as: "institucion" })

Alumno.belongsTo(Historial, { foreignKey: "historial_id", as: "historialA" })
Historial.hasMany(Alumno, { foreignKey: "historial_id", as: "historialA" })

Materias.belongsTo(Historial, { foreignKey: "materias_id", as: "historialM" })
Historial.hasMany(Materias, { foreignKey: "materias_id", as: "historialM" })

Institucion.belongsToMany(NivelEducativo, {
    through: "Nivel_institucion",
    foreignKey: "institucion_id",
    otherKey: "nivelEducativo_id",
    as: "NivelInstitucion"
})
async function nivelF() {
    const count = await NivelEducativo.count();
    if (count === 0) {
        {
            await NivelEducativo.bulkCreate([
                { modalidad_id: 1, nivelEducativo_nombre: "ec_mat", },
                { modalidad_id: 1, nivelEducativo_nombre: "ec_jar", },
                { modalidad_id: 1, nivelEducativo_nombre: "ec_pri", },
                { modalidad_id: 1, nivelEducativo_nombre: "ec_sec", },
                { modalidad_id: 1, nivelEducativo_nombre: "ec_sec_INET", },
                { modalidad_id: 1, nivelEducativo_nombre: "ec_SNU", },
                { modalidad_id: 1, nivelEducativo_nombre: "ec_SNU_INET", },
                { modalidad_id: 1, nivelEducativo_nombre: "ec_SNU_cur", },
                { modalidad_id: 2, nivelEducativo_nombre: "esp_tem", },
                { modalidad_id: 2, nivelEducativo_nombre: "esp_ini", },
                { modalidad_id: 2, nivelEducativo_nombre: "esp_pri", },
                { modalidad_id: 2, nivelEducativo_nombre: "esp_sec", },
                { modalidad_id: 2, nivelEducativo_nombre: "esp_int", },
                { modalidad_id: 3, nivelEducativo_nombre: "ad_pri", },
                { modalidad_id: 3, nivelEducativo_nombre: "ad_sec", },
                { modalidad_id: 3, nivelEducativo_nombre: "ad_FP", },
                { modalidad_id: 3, nivelEducativo_nombre: "ad_FP_INET", },
                { modalidad_id: 3, nivelEducativo_nombre: "ad_alf", },
                { modalidad_id: 2, nivelEducativo_nombre: "hos_ini", },
                { modalidad_id: 2, nivelEducativo_nombre: "hos_pri", },
                { modalidad_id: 2, nivelEducativo_nombre: "hos_sec", },
                { modalidad_id: 2, nivelEducativo_nombre: "tall_art", },
                { modalidad_id: 2, nivelEducativo_nombre: "ser_com", },
            ]);
        }
    }
    console.log('Tabla de NivelEducativo creada')
}

//comentar esto, ejecutar una vez y luego descomentar 
nivelF()