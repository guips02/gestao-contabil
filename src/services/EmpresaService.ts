import { Empresa } from "../entities/EmpresaEntity";
import { empresaRepository } from "../repositories/EmpresaRepository";

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

    async findAll(): Promise<Empresa[]> {
        return await empresaRepository.find();
    }

    async findById(id: number): Promise<Empresa | null> {
        return await empresaRepository.findOneBy({ id });
    }

    async delete(id: number): Promise<string> {
        const empresa = await empresaRepository.findOneBy({ id });

        if (!empresa) {
            throw new Error("Empresa não encontrada no banco de dados");
        }
        await empresaRepository.delete({ id });
        return "Empresa removida com sucesso";
    }
}