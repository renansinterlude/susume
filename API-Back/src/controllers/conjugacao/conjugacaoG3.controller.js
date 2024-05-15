const mongoose = require("mongoose");
const ConjugacaoG3 = mongoose.model("ConjugacaoG3");

exports.getConjugacaoG3 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const conjugacaoG3 = await ConjugacaoG3.find().skip(skip).limit(limit);
      res.json(conjugacaoG3);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailCG3 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Verb": userInput
        };
        const conjugacao = await ConjugacaoG3.find(query);
        res.json(conjugacao);
    } catch (error) {
        res.status(500).send(error);
    }
}