const mongoose = require('mongoose');
const VocabularioN3 = mongoose.model('VocabularioN3');

exports.getVocabularioN3 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
        const page = parseInt(req.query.page) || 1;
        const limit = 25;
        const skip = (page - 1) * limit;

        const vocabularioN3 = await VocabularioN3.find().skip(skip).limit(limit);
        res.json(vocabularioN3);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getDetailVN3 = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "Vocabulary": userInput
        };
        const vocabulario = await VocabularioN3.find(query);
        res.json(vocabulario);
    } catch (error) {
        res.status(500).send(error);
    }
}