const { Router } = require('express');
const ItemAlimentoController = require('../controllers/ItemAlimentoController');

const router = Router();

router.get('/itensAlimento', ItemAlimentoController.pegaTodosItensAlimentos);
router.get('/itensAlimento/:id', ItemAlimentoController.pegaUmItemAlimento)
router.post('/itensAlimento', ItemAlimentoController.criaItemAlimento);
router.put('/itensAlimento/:id', ItemAlimentoController.atualizaItemAlimento);
router.delete('/itensAlimento/:id', ItemAlimentoController.apagaItemAlimento);





module.exports = router