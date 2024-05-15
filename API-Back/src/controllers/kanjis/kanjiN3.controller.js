const mongoose = require("mongoose");
const KanjiN3 = mongoose.model("KanjiN3");

exports.getKanjiN3 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const kanjiN3 = await KanjiN3.find().skip(skip).limit(limit);
      res.json(kanjiN3);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailKN3 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Kanji": userInput
        };
        const kanji = await KanjiN3.find(query);
        res.json(kanji);
    } catch (error) {
        res.status(500).send(error);
    }
}