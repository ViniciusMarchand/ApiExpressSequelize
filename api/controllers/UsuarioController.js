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
    static async atualizaUsuario(req, res) {
        const { id } = req.params;
        const novaInfos = req.body;
        try {
            await database.usuario.update(novaInfos, {
                where: {
                    id: Number(id)
                }
            })
            const usuarioAtualizado = await database.usuario.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagaUsuario(req, res){
        const {id} = req.params;
        try {
            await database.usuario.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({mensagem:"deletado"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = UsuarioController;