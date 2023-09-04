const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodosOsUsuarios)
router.get('/usuarios/:id', UsuarioController.pegaUmUsuario)
router.post('/usuarios', UsuarioController.criaUsuario)


module.exports = router