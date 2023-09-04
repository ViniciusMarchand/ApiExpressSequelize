const bodyParser = require('body-parser');
const usuarios = require('./usuarioRoute')
module.exports = app => {
    app.use(bodyParser.json())
    app.use(usuarios);
}