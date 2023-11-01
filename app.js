import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import "./model/assosiations/assosiations.model.js"

dotenv.config

import { conectarDB } from "./db.js";

const app = express()
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000

app.listen(PORT, () => {
    conectarDB()
    console.log(`Server on port : localhost:${PORT}`);
})