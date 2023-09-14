const database = require('../models');

class ItemProdutoController {
    static async pegaTodosItensProdutos(req, res) {
        try {
            const todosOsItens = await database.item_produto.findAll();
            return res.status(200).json(todosOsItens);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmItemProduto(req, res) {
        const { id } = req.params;
        try {
            const umItemProduto = await database.item_produto.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umItemProduto)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaItemProduto(req, res) {
        const novoItemProduto = req.body;
        try {
            const novoItemProdutoCriado = await database.item_produto.create(novoItemProduto)
            return res.status(200).json(novoItemProdutoCriado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async atualizaItemProduto(req, res) {
        const { id } = req.params;
        const novaInfos = req.body;
        try {
            await database.item_produto.update(novaInfos, {
                where: {
                    id: Number(id)
                }
            })
            const itemProdutoAtualizado = await database.item_produto.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(itemProdutoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagaItemProduto(req, res){
        const {id} = req.params;
        try {
            await database.item_produto.destroy({
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


module.exports = ItemProdutoController;