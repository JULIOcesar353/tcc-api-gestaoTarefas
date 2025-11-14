const express = require('express');
const router = express.Router();

const CargoPermissoesController = require('../controllers/cargoPermissoes');
const TarefasFotosController = require('../controllers/tarefaFotos');

router.get('/cargoPermissoes', CargoPermissoesController.listarCargoPermissoes);
router.post('/cargoPermissoes', CargoPermissoesController.cadastrarCargoPermissoes);
router.patch('/cargoPermissoes', CargoPermissoesController.editarCargoPermissoes);
router.delete('/cargoPermissoes', CargoPermissoesController.apagarCargoPermissoes);

router.get('/tarefaFotos', TarefasFotosController.listarTarefaFotos);
router.post('/tarefaFotos', TarefasFotosController.cadastrarFotosTarefas);
router.patch('/tarefaFotos', TarefasFotosController.editarCargoPermissoes);
router.delete('/tarefaFotos', TarefasFotosController.excluirCargoPermissoes);  

module.exports = router;