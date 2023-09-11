const bodyParser = require('body-parser');
const usuarios = require('./usuarioRoute');
const produtos = require('./produtoRoute');
const alimentos = require('./alimentoRoute')
module.exports = app => {
    app.use(bodyParser.json())
    app.use(usuarios);
    app.use(produtos);
    app.use(alimentos);
}