import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import dataSource from "./infra/orm.config";

dotenv.config();

const app: Express = express();
const porta = process.env.PORT || 3000;


app.get("/", (req: Request, res: Response) => {
    res.send("Servidor Express + TypeScript");
});

dataSource.initialize()
    .then(() => {
        console.log("Conectado ao banco de dados");

        app.listen(porta, () => {
            console.log(`[server]: Servidor rodando em: http://localhost:${porta}`);
        });
    })
    .catch((error) => {
        console.log("Erro ao conectar com o banco de dados:", error);
    });
