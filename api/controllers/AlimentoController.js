const database = require('../models');

class AlimentoController {
    static async pegaTodosAlimentos(req, res) {
        try {
            const todosOsAlimentos = await database.alimento.findAll();
            return res.status(200).json(todosOsAlimentos);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmAlimento(req, res) {
        const { id } = req.params;
        try {
            const umAlimento = await database.alimento.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umAlimento)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaAlimento(req, res) {
        const novoAlimento = req.body;
        try {
            const novoAlimentoCriado = await database.alimento.create(novoAlimento)
            return res.status(200).json(novoAlimento);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizaAlimento(req, res) {
        const { id } = req.params;
        const novaInfos = req.body;
        try {
            await database.alimento.update(novaInfos, {
                where: {
                    id: Number(id)
                }
            })
            const alimentoAtualizado = await database.alimento.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(alimentoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagaAlimento(req, res){
        const {id} = req.params;
        try {
            await database.alimento.destroy({
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


module.exports = AlimentoController;