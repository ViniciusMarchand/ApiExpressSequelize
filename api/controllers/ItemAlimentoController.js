const database = require('../models');

class ItemAlimentoController {
    static async pegaTodosItensAlimentos(req, res) {
        try {
            const todosOsItensAlimentos = await database.item_alimento.findAll();
            return res.status(200).json(todosOsItensAlimentos);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmItemAlimento(req, res) {
        const { id } = req.params;
        try {
            const umItemAlimento = await database.item_alimento.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umItemAlimento)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaItemAlimento(req, res) {
        const novoItemAlimento = req.body;
        try {
            const novoItemAlimentoCriado = await database.item_alimento.create(novoAlimento)
            return res.status(200).json(novoItemAlimento);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizaItemAlimento(req, res) {
        const { id } = req.params;
        const novaInfos = req.body;
        try {
            await database.item_alimento.update(novaInfos, {
                where: {
                    id: Number(id)
                }
            })
            const alimentoItemAtualizado = await database.item_alimento.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(alimentoItemAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagaItemAlimento(req, res){
        const {id} = req.params;
        try {
            await database.item_alimento.destroy({
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


module.exports = ItemAlimentoController;