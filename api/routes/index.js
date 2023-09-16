const bodyParser = require('body-parser');
const usuarios = require('./usuarioRoute');
const produtos = require('./produtoRoute');
const alimentos = require('./alimentoRoute')
const itemProdutos = require('./itemProdutoRoute');
const itemAlimento = require('./itemAlimentoRoute')
const auth = require('./authRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(auth);
    app.use(usuarios);
    app.use(produtos);
    app.use(alimentos);
    app.use(itemProdutos);
    app.use(itemAlimento);
}