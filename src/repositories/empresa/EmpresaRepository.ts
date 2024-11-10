import { Empresa } from "../../entities/EmpresaEntity"
import AppDataSource from "../../infra/orm.config"

export const empresaRepository = AppDataSource.getRepository(Empresa);