const mongoose = require('mongoose');
const VocabularioN2 = mongoose.model('VocabularioN2');

exports.getVocabularioN2 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const vocabularioN2 = await VocabularioN2.find().skip(skip).limit(limit);
      res.json(vocabularioN2);
  } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailVN2 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Vocabulary": userInput
        };
        const vocabulario = await VocabularioN2.find(query);
        res.json(vocabulario);
    } catch (error) {
        res.status(500).send(error);
    }
}