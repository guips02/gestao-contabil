import { Request, Response } from "express";
import { EmpresaService } from "../services/EmpresaService";


export class EmpresaController {
    private empresaService: EmpresaService;

    constructor() {
        this.empresaService = new EmpresaService();
    }

    async criarEmpresa(req: Request, res: Response) {
        try {
            const novaEmpresa = await this.empresaService.create(req.body);
            return res.status(201).json(novaEmpresa);

        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async buscarTodasEmpresas(req: Request, res: Response) {
        try {
            const empresas = await this.empresaService.findAll();
            return res.status(200).json(empresas);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async buscaEmpresaPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const empresa = await this.empresaService.findById(parseInt(id));
            if (!empresa) {
                return res.status(404).json({ message: "Empresa não encontrada no banco de dados." });
            }
            return res.status(200).json(empresa);
        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }

    async deletarEmpresa(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const message = await this.empresaService.delete(Number(id));
            return res.status(200).json({ message });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export default new EmpresaController();
