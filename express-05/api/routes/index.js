const express = require("express");
const router = express.Router();

const pessoaController = require("../controllers/pessoaController");
const experienciaController = require("../controllers/experienciaController");
const formacaoController = require("../controllers/formacaoController");

router.post("/pessoas", pessoaController.criar);
router.get("/pessoas", pessoaController.listar);
router.get("/pessoas/:id", pessoaController.buscarPorId);
router.delete("/pessoas/:id", pessoaController.excluir);

router.post("/experiencias", experienciaController.criar);
router.post("/formacoes", formacaoController.criar);

module.exports = router;