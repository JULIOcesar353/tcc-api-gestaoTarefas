const express = require('express');
const router = express.Router();

const CargoPermissoesController = require('../controllers/CargoPermissoes');
const TarefasFotosController = require('../controllers/TarefaFotos');

const uploadImage = require('../middleware/uploadHelper');

//Middleware configurado para a pasta  'tarefas'
const uploadTarefas = uploadImage('tarefas');

router.get('/cargoPermissoes', CargoPermissoesController.listarCargoPermissoes);
router.post('/cargoPermissoes', CargoPermissoesController.cadastrarCargoPermissoes);
router.patch('/CargoPermissoes/:crg_id/:prm_id', CargoPermissoesController.editarCargoPermissoes);
router.delete('/cargoPermissoes/:crg_id/:prm_id', CargoPermissoesController.apagarCargoPermissoes);

router.get('/tarefaFotos', TarefasFotosController.listarTarefaFotos);
router.post('/tarefaFotos', uploadTarefas.single('img'), TarefasFotosController.cadastrarFotosTarefas);
router.patch('/tarefaFotos/:id', TarefasFotosController.editartarefaFotos);
router.delete('/tarefaFotos/:id', TarefasFotosController.excluirtarefaFotos);  

module.exports = router;