const mongoose = require("mongoose");
const KanjiN4 = mongoose.model("KanjiN4");

exports.getKanjiN4 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const kanjiN4 = await KanjiN4.find().skip(skip).limit(limit);
      res.json(kanjiN4);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailKN4 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Kanji": userInput
        };
        const kanji = await KanjiN4.find(query);
        res.json(kanji);
    } catch (error) {
        res.status(500).send(error);
    }
}