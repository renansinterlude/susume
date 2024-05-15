const mongoose = require("mongoose");
const KanjiN5 = mongoose.model("KanjiN5");

exports.getKanjiN5 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const kanjiN5 = await KanjiN5.find().skip(skip).limit(limit);
      res.json(kanjiN5);
    } catch (error) {
      res.status(500).send(error);
    }
}

exports.getDetailKN5 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Kanji": userInput
        };
        const kanji = await KanjiN5.find(query);
        res.json(kanji);
    } catch (error) {
        res.status(500).send(error);
    }
}
