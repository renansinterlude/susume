const mongoose = require('mongoose');

// Define os modelos
const KanjiN5 = mongoose.model("KanjiN5");
const KanjiN4 = mongoose.model("KanjiN4");
const KanjiN3 = mongoose.model("KanjiN3");
const KanjiN2 = mongoose.model("KanjiN2");
const KanjiN1 = mongoose.model("KanjiN1");

const models = [KanjiN5, KanjiN4, KanjiN3, KanjiN2, KanjiN1];

exports.getDetailBuscaKanji = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
             "Kanji": userInput 
        };

        // Cria uma variável para armazenar o resultado
        let result = null;

        // Itera sobre todos os modelos e executa a consulta em cada um deles
        for (let model of models) {
            const kanji = await model.findOne(query);
            // Se um resultado for encontrado, armazena-o na variável result e interrompe o loop
            if (kanji) {
                result = kanji;
                break;
            }
        }

        res.json(result);
    } catch (error) {
        res.status(500).send(error);
    }
}