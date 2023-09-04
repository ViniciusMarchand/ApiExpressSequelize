const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodosOsUsuarios)
router.get('/usuarios/:id', UsuarioController.pegaUmUsuario)

module.exports = router