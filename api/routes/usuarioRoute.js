const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const autenticado = require('../middleware/autenticado')

const router = Router();

router.use(autenticado)
//USUARIOS
router.get('/usuarios', UsuarioController.pegaTodosOsUsuarios)
router.get('/usuarios/:id', UsuarioController.pegaUmUsuario)
router.post('/usuarios', UsuarioController.cadastrar)

// router.post('/usuarios', UsuarioController.criaUsuario)
router.put('/usuarios/:id', UsuarioController.atualizaUsuario)
router.delete('/usuarios/:id', UsuarioController.apagaUsuario)
//PRODUTOS
router.get('/usuarios/:usuarioId/produtos', UsuarioController.pegaTodosProdutosUsuario)
router.get('/usuarios/:usuarioId/produtos/:produtoId', UsuarioController.pegaUmProdutosUsuario)
router.post('/usuarios/:usuarioId/produtos', UsuarioController.criaUsuarioProduto)
router.put('/usuarios/:usuarioId/produtos/:produtoId', UsuarioController.atualizaUsuarioProduto)
router.delete('/usuarios/:usuarioId/produtos/:produtoId', UsuarioController.apagaProdutosUsuario)
//ALIMENTOS

router.get('/usuarios/:usuarioId/alimentos', UsuarioController.pegaTodosAlimentosUsuario)
router.get('/usuarios/:usuarioId/alimentos/:alimentoId', UsuarioController.pegaUmAlimentoUsuario)
router.post('/usuarios/:usuarioId/alimentos', UsuarioController.criaUsuarioAlimento)
router.put('/usuarios/:usuarioId/alimentos/:alimentoId', UsuarioController.atualizaUsuarioAlimento)
router.delete('/usuarios/:usuarioId/alimentos/:alimentoId', UsuarioController.apagaAlimentoUsuario)

//ITEM PRODUTO

router.get('/usuarios/:usuarioId/itensProduto', UsuarioController.pegaTodosItensProdutosUsuario)
router.get('/usuarios/:usuarioId/itensProduto/:itemProdutoId', UsuarioController.pegaUmitemProduto)
router.post('/usuarios/:usuarioId/itensProduto', UsuarioController.criaUsuarioItemProduto)
router.put('/usuarios/:usuarioId/itensProduto/:itemProdutoId', UsuarioController.atualizaUsuarioItemProduto)
router.delete('/usuarios/:usuarioId/itensProduto/:itemProdutoId', UsuarioController.apagaItemProdutoUsuario)

//ITEM ALIMENTO

router.get('/usuarios/:usuarioId/itensAlimento', UsuarioController.pegaTodosItensAlimentosUsuario)
router.get('/usuarios/:usuarioId/itensAlimento/:itemAlimentoId', UsuarioController.pegaUmitemAlimento)
router.post('/usuarios/:usuarioId/itensAlimento', UsuarioController.criaUsuarioItemAlimento)
router.put('/usuarios/:usuarioId/itensAlimento/:itemAlimentoId', UsuarioController.atualizaUsuarioItemAlimento)
router.delete('/usuarios/:usuarioId/itensAlimento/:itemAlimentoId', UsuarioController.apagaItemAlimentoUsuario)


module.exports = router