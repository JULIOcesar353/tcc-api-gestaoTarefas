const express = require('express');
const router = express.Router();

const CargoPermissoesController = require('../controllers/CargoPermissoes');
const TarefasFotosController = require('../controllers/tarefaFotos');

router.get('/cargoPermissoes', CargoPermissoesController.listarCargoPermissoes);
router.post('/cargoPermissoes', CargoPermissoesController.cadastrarCargoPermissoes);
router.patch('/CargoPermissoes/:crg_id/:prm_id', CargoPermissoesController.editarCargoPermissoes);
router.delete('/cargoPermissoes', CargoPermissoesController.apagarCargoPermissoes);

router.get('/tarefaFotos', TarefasFotosController.listarTarefaFotos);
router.post('/tarefaFotos', TarefasFotosController.cadastrarFotosTarefas);
router.patch('/tarefaFotos/:id', TarefasFotosController.editarCargoPermissoes);
router.delete('/tarefaFotos', TarefasFotosController.excluirCargoPermissoes);  

module.exports = router;