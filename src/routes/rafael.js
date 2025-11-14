const express = require('express');
const router = express.Router();

const atribuicaoTarefasController = require('../controllers/atribuicaoTarefas');


router.get('/atribuicaoTarefas' , atribuicaoTarefasController.listaratribicaoTarefas);
router.post('/atribuicaoTarefas' , atribuicaoTarefasController.cadastraratribicaoTarefas);
router.patch('/atribuicaoTarefas' , atribuicaoTarefasController.editaratribicaoTarefas);
router.delete('/atribuicaoTarefas' , atribuicaoTarefasController.apagaratribuicaoTarefas);


module.exports = router;