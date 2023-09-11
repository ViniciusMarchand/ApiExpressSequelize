const { Router } = require('express');
const AlimentoController = require('../controllers/AlimentoController');

const router = Router();

router.get('/alimentos', AlimentoController.pegaTodosAlimentos);
// router.get('/alimentos/:id', AlimentoController.pegaUmAlimento)
// router.post('/usuarios', UsuarioController.criaUsuario)
// router.put('/usuarios/:id', UsuarioController.atualizaUsuario)
// router.delete('/usuarios/:id', UsuarioController.apagaUsuario)





module.exports = router