import { Empresa } from "../../entities/empresa/EmpresaEntity"
import AppDataSource from "../../infra/orm.config"

export const empresaRepository = AppDataSource.getRepository(Empresa);