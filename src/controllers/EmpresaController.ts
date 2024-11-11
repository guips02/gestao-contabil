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
}

export default new EmpresaController();
