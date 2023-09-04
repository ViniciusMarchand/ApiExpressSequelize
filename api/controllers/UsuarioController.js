const database = require('../models');

class UsuarioController {
    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await database.usuario.findAll();
            return res.status(200).json(todosOsUsuarios);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmUsuario(req, res) {
        const { id } = req.params;
        try {
            const umUsuario = await database.usuario.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umUsuario)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaUsuario(req, res) {
        const novoUsuario = req.body;
        try {
            const novoUsuarioCriado = await database.usuario.create(novoUsuario)
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
}


module.exports = UsuarioController;