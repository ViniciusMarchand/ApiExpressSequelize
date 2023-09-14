const { Router } = require('express');
const ItemProdutoController = require('../controllers/ItemProdutoController');

const router = Router();

router.get('/itensProduto', ItemProdutoController.pegaTodosItensProdutos);
router.get('/itensProduto/:id', ItemProdutoController.pegaUmItemProduto)
router.post('/itensProduto', ItemProdutoController.criaItemProduto);
router.put('/itensProduto/:id', ItemProdutoController.atualizaItemProduto);
router.delete('/itensProduto/:id', ItemProdutoController.apagaItemProduto);





module.exports = router