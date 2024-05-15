const mongoose = require("mongoose");
const KanjiN1 = mongoose.model("KanjiN1");

exports.getKanjiN1 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const kanjiN1 = await KanjiN1.find().skip(skip).limit(limit);
      res.json(kanjiN1);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailKN1 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Kanji": userInput
        };
        const kanji = await KanjiN1.find(query);
        res.json(kanji);
    } catch (error) {
        res.status(500).send(error);
    }
}