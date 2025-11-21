const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/permissoes');

router.get('/permissoes', UsuariosController.listarPermissoes);
router.post('/permissoes', UsuariosController.cadastrarPermissoes);
router.patch('/permissoes/:id', UsuariosController.editarPermissoes);
router.delete('/permissoes/:id', UsuariosController.apagarPermissoes);

module.exports = router;