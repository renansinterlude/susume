const mongoose = require("mongoose");
const ConjugacaoG1 = mongoose.model("ConjugacaoG1");

exports.getConjugacaoG1 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const conjugacaoG1 = await ConjugacaoG1.find().skip(skip).limit(limit);
      res.json(conjugacaoG1);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailCG1 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Verb": userInput
        };
        const conjugacao = await ConjugacaoG1.find(query);
        res.json(conjugacao);
    } catch (error) {
        res.status(500).send(error);
    }
}