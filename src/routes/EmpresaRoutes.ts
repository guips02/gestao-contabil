import { Router } from "express";
import EmpresaController from "../controllers/EmpresaController";

const router = Router();

router.post('/empresas', (req, res) => {
    EmpresaController.criarEmpresa(req, res);
});

export default router;