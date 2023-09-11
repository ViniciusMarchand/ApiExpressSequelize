const database = require('../models');

class ProdutoController {
    static async pegaTodosProdutos(req, res) {
        try {
            const todosOsProdutos = await database.produto.findAll();
            return res.status(200).json(todosOsProdutos);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmProduto(req, res) {
        const { id } = req.params;
        try {
            const umProduto = await database.produto.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umProduto)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaProduto(req, res) {
        const novoProduto = req.body;
        try {
            const novoProdutoCriado = await database.produto.create(novoProduto)
            return res.status(200).json(novoProdutoCriado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async atualizaProduto(req, res) {
        const { id } = req.params;
        const novaInfos = req.body;
        try {
            await database.produto.update(novaInfos, {
                where: {
                    id: Number(id)
                }
            })
            const produtoAtualizado = await database.produto.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(produtoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagaProduto(req, res){
        const {id} = req.params;
        try {
            await database.produto.destroy({
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


module.exports = ProdutoController;