import { Institucion } from "../institucion.model.js";
import { Departamento } from "../departamento.model.js";
import { DomicilioInst } from "../domicilio.model.js";
import { Sector } from "../sector.model.js";
import { Modalidad } from "../modalidad.model.js";
import { Localidad } from "../localidad.model.js";
import { Ambito } from "../ambito.model.js";
import { NivelEducativo } from "../nivelEducativo.model.js";
import { Modalidad_institucion } from "../modalidad_institucion.js";
import { Nivel_institucion } from "../nivel_institucion.model.js";
import { Domicilio_institucion } from "../domicilio_institucion.model.js";

Ambito.belongsTo(Institucion, { foreignKey: "ambito_id", as: "ambito" })
Institucion.hasMany(Ambito, { foreignKey: "ambito_id", as: "ambito" })

Sector.belongsTo(Institucion, { foreignKey: "sector_id", as: "sector" })
Institucion.hasMany(Sector, { foreignKey: "sector_id", as: "sector" })

Localidad.belongsTo(Institucion, { foreignKey: "localidad_id", as: "localidad" })
Institucion.hasMany(Localidad, { foreignKey: "localidad_id", as: "localidad" })

Localidad.belongsTo(Departamento, { foreignKey: "departamento_id", as: "departamento" })
Departamento.hasMany(Localidad, { foreignKey: "departamento_id", as: "departamento" })

Institucion.belongsToMany(Modalidad, {
    through: "Modalidad_institucion",
    foreignKey: "institucion_id",
    otherKey: "modalidad_id",
    as: "ModalidadInstitucion"
})

Institucion.belongsToMany(NivelEducativo, {
    through: "Nivel_institucion",
    foreignKey: "institucion_id",
    otherKey: "nivelEducativo_id",
    as: "NivelInstitucion"
})

Institucion.belongsToMany(DomicilioInst, {
    through: "Domicilio_institucion",
    foreignKey: "institucion_id",
    otherKey: "domicilio_id",
    as: "InstitucionDomicilio"
})