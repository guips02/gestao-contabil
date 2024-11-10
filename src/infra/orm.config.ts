import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { PlanoContabil } from "../entities/planoContabil/plano.contabil.entity";
import { ContaContabil } from "../entities/contaContabil/conta.contabil.entity";
import { Empresa } from "../entities/empresa/empresa.entity";

dotenv.config();

export default new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT || "5432", 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [Empresa, PlanoContabil, ContaContabil],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"]
});
