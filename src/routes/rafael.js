const express = require('express');
const router = express.Router();

const atribuicaoTarefasController = require('../controllers/atribuicaoTarefas');


router.get('/atribuicaoTarefas' , atribuicaoTarefasController.listarAtribuicaoTarefas);
router.post('/atribuicaoTarefas' , atribuicaoTarefasController.cadastrarAtribuicaoTarefas);
router.patch('/atribuicaoTarefas/:id' , atribuicaoTarefasController.editarAtribuicaoTarefas);
router.delete('/atribuicaoTarefas' , atribuicaoTarefasController.apagarAtribuicaoTarefas);


module.exports = router;   