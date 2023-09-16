const database = require('../models');
const UsuarioService = require('../services/usuarioService')
const usuarioService = new UsuarioService()
class UsuarioController {
    //USUARIOS
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

    static async cadastrar(req, res){
        const {nome, email, senha } = req.body;

        try {
            const usuario = await usuarioService.cadastrar({nome, email, senha})
            res.status(200).send(usuario)
        } catch (error) {
            res.status(400).send({message:error.message})
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
    static async apagaUsuario(req, res) {
        const { id } = req.params;
        try {
            await database.usuario.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ mensagem: "deletado" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //PRODUTOS
    static async pegaTodosProdutosUsuario(req, res) {
        const { usuarioId } = req.params;
        try {
            const todosProdutosUsuario = await database.produto.findAll({
                where: {
                    usuario_id: Number(usuarioId)
                }
            })
            return res.status(200).json(todosProdutosUsuario);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
    static async pegaUmProdutosUsuario(req, res) {
        const { usuarioId, produtoId } = req.params;
        try {
            const todosProdutosUsuario = await database.produto.findOne({
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(produtoId)
                }
            })
            return res.status(200).json(todosProdutosUsuario);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async criaUsuarioProduto(req, res) {
        const { usuarioId } = req.params;
        const novoProduto = { ...req.body, usuario_id: Number(usuarioId) };
        try {
            const produtoCriado = await database.produto.create(novoProduto)
            return res.status(200).json(produtoCriado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async atualizaUsuarioProduto(req, res) {
        const { usuarioId, produtoId } = req.params;
        const novaInfo = req.body;
        try {
            await database.produto.update(novaInfo, {
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(produtoId)
                }
            })
            const usuarioProdutoAtualizado = await database.produto.findOne({
                where: {
                    id: Number(produtoId),
                    usuario_id: Number(usuarioId)
                }
            })
            return res.status(200).json(usuarioProdutoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async apagaProdutosUsuario(req, res) {
        const { usuarioId, produtoId } = req.params;
        try {
            await database.produto.destroy({
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(produtoId)
                }
            })
            return res.status(200).json({ mensagem: "deletado" });
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }


    //ALIMENTOS

    static async pegaTodosAlimentosUsuario(req, res) {
        const { usuarioId } = req.params;
        try {
            const todosDados = await database.alimento.findAll({
                where: {
                    usuario_id: Number(usuarioId)
                }
            })
            return res.status(200).json(todosDados);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
    static async pegaUmAlimentoUsuario(req, res) {
        const { usuarioId, alimentoId } = req.params;
        try {
            const umDado = await database.alimento.findOne({
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(alimentoId)
                }
            })
            return res.status(200).json(umDado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async criaUsuarioAlimento(req, res) {
        const { usuarioId } = req.params;
        const novoDado = { ...req.body, usuario_id: Number(usuarioId) };
        try {
            const dadoCriado = await database.alimento.create(novoDado)
            return res.status(200).json(dadoCriado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async atualizaUsuarioAlimento(req, res) {
        const { usuarioId, alimentoId } = req.params;
        const novaInfo = req.body;
        try {
            await database.alimento.update(novaInfo, {
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(alimentoId)
                }
            })
            const usuarioAlimentoAtualizado = await database.alimento.findOne({
                where: {
                    id: Number(alimentoId),
                    usuario_id: Number(usuarioId)
                }
            })
            return res.status(200).json(usuarioAlimentoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async apagaAlimentoUsuario(req, res) {
        const { usuarioId, alimentoId } = req.params;
        try {
            await database.alimento.destroy({
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(alimentoId)
                }
            })
            return res.status(200).json({ mensagem: "deletado" });
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }


    //ITEM PRODUTO

    static async pegaTodosItensProdutosUsuario(req, res) {
        const { usuarioId } = req.params;
        try {
            const todosDados = await database.item_produto.findAll({
                where: {
                    usuario_id: Number(usuarioId)
                }
            })
            return res.status(200).json(todosDados);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
    static async pegaUmitemProduto(req, res) {
        const { usuarioId, itemProdutoId } = req.params;
        try {
            const umDado = await database.item_produto.findOne({
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(itemProdutoId)
                }
            })
            return res.status(200).json(umDado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async criaUsuarioItemProduto(req, res) {
        const { usuarioId } = req.params;
        const novoDado = { ...req.body, usuario_id: Number(usuarioId) };
        try {
            const dadoCriado = await database.item_produto.create(novoDado)
            return res.status(200).json(dadoCriado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async atualizaUsuarioItemProduto(req, res) {
        const { usuarioId, itemProdutoId } = req.params;
        const novaInfo = req.body;
        try {
            await database.item_produto.update(novaInfo, {
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(itemProdutoId)
                }
            })
            const dadoAtualizado = await database.item_produto.findOne({
                where: {
                    id: Number(itemProdutoId),
                    usuario_id: Number(usuarioId)
                }
            })
            return res.status(200).json(dadoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async apagaItemProdutoUsuario(req, res) {
        const { usuarioId, itemProdutoId } = req.params;
        try {
            await database.item_produto.destroy({
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(itemProdutoId)
                }
            })
            return res.status(200).json({ mensagem: "deletado" });
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    //ITEM ALIMENTO

    static async pegaTodosItensAlimentosUsuario(req, res) {
        const { usuarioId } = req.params;
        try {
            const todosDados = await database.item_alimento.findAll({
                where: {
                    usuario_id: Number(usuarioId)
                }
            })
            return res.status(200).json(todosDados);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
    static async pegaUmitemAlimento(req, res) {
        const { usuarioId, itemAlimentoId } = req.params;
        try {
            const umDado = await database.item_alimento.findOne({
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(itemAlimentoId)
                }
            })
            return res.status(200).json(umDado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async criaUsuarioItemAlimento(req, res) {
        const { usuarioId } = req.params;
        const novoDado = { ...req.body, usuario_id: Number(usuarioId) };
        try {
            const dadoCriado = await database.item_alimento.create(novoDado)
            return res.status(200).json(dadoCriado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async atualizaUsuarioItemAlimento(req, res) {
        const { usuarioId, itemAlimentoId } = req.params;
        const novaInfo = req.body;
        try {
            await database.item_alimento.update(novaInfo, {
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(itemAlimentoId)
                }
            })
            const dadoAtualizado = await database.item_alimento.findOne({
                where: {
                    id: Number(itemAlimentoId),
                    usuario_id: Number(usuarioId)
                }
            })
            return res.status(200).json(dadoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async apagaItemAlimentoUsuario(req, res) {
        const { usuarioId, itemAlimentoId } = req.params;
        try {
            await database.item_alimento.destroy({
                where: {
                    usuario_id: Number(usuarioId),
                    id: Number(itemAlimentoId)
                }
            })
            return res.status(200).json({ mensagem: "deletado" });
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
}


module.exports = UsuarioController;