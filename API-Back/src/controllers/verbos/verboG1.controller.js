const mongoose = require("mongoose");
const VerboG1 = mongoose.model("VerboG1");

exports.getVerboG1 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const verboG1 = await VerboG1.find().skip(skip).limit(limit);
      res.json(verboG1);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailVG1 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Vocabulary": userInput
        };
        const verbo = await VerboG1.find(query);
        res.json(verbo);
    } catch (error) {
        res.status(500).send(error);
    }
}