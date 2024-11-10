import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Empresa } from "../entities/empresa/EmpresaEntity";
import { PlanoContabil } from "../entities/planoContabil/PlanoContabilEntity";
import { ContaContabil } from "../entities/contaContabil/ContaContabilEntity";

dotenv.config();

const AppDataSource = new DataSource({
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

export default AppDataSource;