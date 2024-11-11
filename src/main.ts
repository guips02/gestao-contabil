import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import AppDataSource from "./infra/orm.config";
import empresaRouter from "./routes/EmpresaRoutes"

dotenv.config();

const app: Express = express();
const porta = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", empresaRouter);

AppDataSource.initialize()
    .then(() => {
        console.log("Conectado ao banco de dados");

        app.listen(porta, () => {
            console.log(`[server]: Servidor rodando em: http://localhost:${porta}`);
        });
    })
    .catch((error) => {
        console.log("Erro ao conectar com o banco de dados:", error);
    });
