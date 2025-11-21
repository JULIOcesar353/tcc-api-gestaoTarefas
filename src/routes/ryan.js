const express = require('express');
const router = express.Router();

const CargoPermissoesController = require('../controllers/CargoPermissoes');
const TarefasFotosController = require('../controllers/TarefaFotos');

router.get('/cargoPermissoes', CargoPermissoesController.listarCargoPermissoes);
router.post('/cargoPermissoes', CargoPermissoesController.cadastrarCargoPermissoes);
router.patch('/CargoPermissoes/:crg_id/:prm_id', CargoPermissoesController.editarCargoPermissoes);
router.delete('/cargoPermissoes/:crg_id/:prm_id', CargoPermissoesController.apagarCargoPermissoes);

router.get('/tarefaFotos', TarefasFotosController.listarTarefaFotos);
router.post('/tarefaFotos', TarefasFotosController.cadastrarFotosTarefas);
router.patch('/tarefaFotos/:id', TarefasFotosController.editartarefaFotos);
router.delete('/tarefaFotos/:id', TarefasFotosController.excluirtarefaFotos);  

module.exports = router;