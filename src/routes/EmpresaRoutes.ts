import { Router } from "express";
import EmpresaController from "../controllers/EmpresaController";

const router = Router();

router.post('/empresas', (req, res) => {
    EmpresaController.criarEmpresa(req, res);
});

router.get('/empresas', (req, res) => {
    EmpresaController.buscarTodasEmpresas(req, res);
})

router.get('/empresas/:id', (req, res) => {
    EmpresaController.buscaEmpresaPorId(req, res);
})

router.delete('/empresas/:id', (req, res) => {
    EmpresaController.deletarEmpresa(req, res);
})

export default router;
