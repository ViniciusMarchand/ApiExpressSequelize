const database = require('../models');

class UsuarioController{
    static async pegaTodosOsUsuarios(req, res){
        try{
            const todosOsUsuarios = await database.usuario.findAll();
            return res.status(200).json(todosOsUsuarios);
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsuarioController;