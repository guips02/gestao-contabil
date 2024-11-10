import { Request, Response } from "express";
import { EmpresaService } from "../../services/empresa/EmpresaService";


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
}

export default new EmpresaController();
