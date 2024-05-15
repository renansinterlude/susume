const mongoose = require("mongoose");
const ConjugacaoG2 = mongoose.model("ConjugacaoG2");

exports.getConjugacaoG2 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const conjugacaoG2 = await ConjugacaoG2.find().skip(skip).limit(limit);
      res.json(conjugacaoG2);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailCG2 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Verb": userInput
        };
        const conjugacao = await ConjugacaoG2.find(query);
        res.json(conjugacao);
    } catch (error) {
        res.status(500).send(error);
    }
}