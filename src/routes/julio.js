const express = require('express');
const router = express.Router();

const FuncionariosController = require('../controllers/funcionarios');
const CargosController = require('../controllers/CARGOS');

router.get('/funcionarios', FuncionariosController.listarFuncionarios);
router.post('/funcionarios', FuncionariosController.cadastrarFuncionarios);
router.patch('/funcionarios/:id', FuncionariosController.editarFuncionarios);
router.delete('/funcionarios', FuncionariosController.apagarFuncionarios);

router.get('/CARGOS', CargosController.listarCargos);
router.post('/CARGOS', CargosController.cadastrarCargos);
router.patch('/CARGOS/:id', CargosController.editarCargos);
router.delete('/CARGOS', CargosController.apagarCargos);

module.exports = router;