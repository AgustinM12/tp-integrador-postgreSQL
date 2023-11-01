import dotenv from "dotenv"
dotenv.config()

import { Sequelize } from 'sequelize';
// Se crea una instancia de la conexión a la base de datos

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT || 'postgres',
        port: process.env.DB_PORT
    });

// SE PRUEBA LA CONEXION A LA DB
export const conectarDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexion exitosa a la DB');
    } catch (error) {
        console.log('ERROR AL CONECTAR A LA DB: ', error);
    }
};

export default sequelize