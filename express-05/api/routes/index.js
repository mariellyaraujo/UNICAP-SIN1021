const express = require("express");
const router = express.Router();

const pessoaController = require("../controllers/pessoaController");
const experienciaController = require("../controllers/experienciaController");
const formacaoController = require("../controllers/formacaoController");

router.get("/pessoas", pessoaController.listar);
router.get("/pessoas/:id", pessoaController.buscarPorId);
router.post("/pessoas", pessoaController.criar);
router.put("/pessoas/:id", pessoaController.atualizar);
router.delete("/pessoas/:id", pessoaController.excluir);

router.get("/experiencias", experienciaController.listar);
router.post("/experiencias", experienciaController.criar);
router.put("/experiencias/:id", experienciaController.atualizar);
router.delete("/experiencias/:id", experienciaController.excluir);

router.get("/formacoes", formacaoController.listar);
router.post("/formacoes", formacaoController.criar);
router.put("/formacoes/:id", formacaoController.atualizar);
router.delete("/formacoes/:id", formacaoController.excluir);

module.exports = router;