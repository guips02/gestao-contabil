import { Router } from "express";
import EmpresaController from "../controllers/EmpresaController";

const router = Router();

router.post('/empresas', (req, res) => {
    EmpresaController.criarEmpresa(req, res);
});

router.get('/empresas', (req, res) => {
    EmpresaController.buscarTodasEmpresas(req, res);
})

export default router;
