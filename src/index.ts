import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const porta = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Servidor Express + TypeScript");
});

app.listen(porta, () => {
    console.log(`[server]: Servidor rodando em: http://localhost:${porta}`);
});