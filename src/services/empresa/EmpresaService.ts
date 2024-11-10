import { Empresa } from "../../entities/empresa/EmpresaEntity";
import { empresaRepository } from "../../repositories/empresa/EmpresaRepository";

export class EmpresaService {
    async create(dadosEmpresa: Empresa): Promise<Empresa> {
        const { razaoSocial, apelido, endereco, regimeTributario, planoContabil } = dadosEmpresa;

        const novaEmpresa = empresaRepository.create({
            razaoSocial,
            apelido,
            endereco,
            regimeTributario,
            planoContabil: planoContabil,
        });

        return await empresaRepository.save(novaEmpresa);
    }
}