const express = require("express");
const router = express.Router();

const FuncionariosController = require("../controllers/funcionarios");
const CargosController = require("../controllers/cargos");

const { autenticarJWT } = require("../auth/authMiddleware");

router.get(
  "/funcionarios",
  autenticarJWT,
  FuncionariosController.listarFuncionarios,
);

router.post(
  "/funcionarios",
  autenticarJWT,
  FuncionariosController.cadastrarFuncionarios,
);

router.patch(
  "/funcionarios/:id",
  autenticarJWT,
  FuncionariosController.editarFuncionarios,
);

router.delete(
  "/funcionarios/:id",
  autenticarJWT,
  FuncionariosController.apagarFuncionarios,
);

router.delete(
  "/funcionarios/del/:id",
  autenticarJWT,
  FuncionariosController.ocultarFuncionarios,
);

router.get("/CARGOS", CargosController.listarCargos);
router.post("/CARGOS", CargosController.cadastrarCargos);
router.patch("/CARGOS/:id", CargosController.editarCargos);
router.delete("/CARGOS/:id", CargosController.apagarCargos);

module.exports = router;
