const mongoose = require('mongoose');

// Define os modelos
const VocabularioN5 = mongoose.model('VocabularioN5');
const VocabularioN4 = mongoose.model('VocabularioN4');
const VocabularioN3 = mongoose.model('VocabularioN3');
const VocabularioN2 = mongoose.model('VocabularioN2');
const VocabularioN1 = mongoose.model('VocabularioN1');
const KanjiN5 = mongoose.model("KanjiN5");
const KanjiN4 = mongoose.model("KanjiN4");
const KanjiN3 = mongoose.model("KanjiN3");
const KanjiN2 = mongoose.model("KanjiN2");
const KanjiN1 = mongoose.model("KanjiN1");
// const GramaticaN5 = mongoose.model("GramaticaN5");
// const GramaticaN4 = mongoose.model("GramaticaN4");
// const GramaticaN3 = mongoose.model("GramaticaN3");
// const GramaticaN2 = mongoose.model("GramaticaN2");
// const GramaticaN1 = mongoose.model("GramaticaN1")

// Coloca todos os modelos em um array
const models = [VocabularioN5, VocabularioN4, VocabularioN3, VocabularioN2, VocabularioN1, KanjiN5, KanjiN4, KanjiN3, KanjiN2, KanjiN1];

exports.getBuscaGeral = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
            $or: [
                { "Vocabulary": { $regex: new RegExp(userInput, 'i') } },
                { "Kanji": { $regex: new RegExp(userInput, 'i') } },
                //{ "Grammar": { $regex: new RegExp(userInput, 'i') } },
                { "Reading": { $regex: new RegExp(userInput, 'i') } },
                { "On-Reading": { $regex: new RegExp(userInput, 'i') } },
                { "Kun-Reading": { $regex: new RegExp(userInput, 'i') } },
                { "Pronunciation": { $regex: new RegExp(userInput, 'i') } },
                { "Translation": { $regex: new RegExp(userInput, 'i') } }
            ]
        };

        // Cria um array para armazenar todos os resultados
        let results = [];

        // Itera sobre todos os modelos e executa a consulta em cada um deles
        for (let model of models) {
            const palavra = await model.find(query);
            // Concatena os resultados
            results = results.concat(palavra);
        }

        res.json(results);
    } catch (error) {
        res.status(500).send(error);
    }
}