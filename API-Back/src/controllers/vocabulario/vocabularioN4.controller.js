const mongoose = require('mongoose');
const VocabularioN4 = mongoose.model('VocabularioN4');

exports.getVocabularioN4 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
        const page = parseInt(req.query.page) || 1;
        const limit = 25;
        const skip = (page - 1) * limit;

        const vocabularioN4 = await VocabularioN4.find().skip(skip).limit(limit);
        res.json(vocabularioN4);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getDetailVN4 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Vocabulary": userInput
        };
        const vocabulario = await VocabularioN4.find(query);
        res.json(vocabulario);
    } catch (error) {
        res.status(500).send(error);
    }
}