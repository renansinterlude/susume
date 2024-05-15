const mongoose = require("mongoose");
const VocabularioN5 = mongoose.model("VocabularioN5");

exports.getVocabularioN5 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const vocabularioN5 = await VocabularioN5.find().skip(skip).limit(limit);
      res.json(vocabularioN5);
    } catch (error) {
      res.status(500).send(error);
    }
}

//funcao para capturar o input do usuario e retornar o resultado da busca
exports.getDetailVN5 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Vocabulary": userInput
        };
        const vocabulario = await VocabularioN5.find(query);
        res.json(vocabulario);
    } catch (error) {
        res.status(500).send(error);
    }
}

