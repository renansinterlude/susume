const mongoose = require("mongoose");
const VerboG2 = mongoose.model("VerboG2");

exports.getVerboG2 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const verboG2 = await VerboG2.find().skip(skip).limit(limit);
      res.json(verboG2);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailVG2 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Vocabulary": userInput
        };
        const verbo = await VerboG2.find(query);
        res.json(verbo);
    } catch (error) {
        res.status(500).send(error);
    }
}