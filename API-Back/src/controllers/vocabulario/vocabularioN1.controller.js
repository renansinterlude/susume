const mongoose = require('mongoose');
const VocabularioN1 = mongoose.model('VocabularioN1');

exports.getVocabularioN1 = async (req, res) => {
    try {
      //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const vocabularioN1 = await VocabularioN1.find().skip(skip).limit(limit);
      res.json(vocabularioN1);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailVN1 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Vocabulary": userInput
        };
        const vocabulario = await VocabularioN1.find(query);
        res.json(vocabulario);
    } catch (error) {
        res.status(500).send(error);
    }
}