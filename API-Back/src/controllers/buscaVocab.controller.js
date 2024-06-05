const mongoose = require('mongoose');

// Define os modelos
const VocabularioN5 = mongoose.model('VocabularioN5');
const VocabularioN4 = mongoose.model('VocabularioN4');
const VocabularioN3 = mongoose.model('VocabularioN3');
const VocabularioN2 = mongoose.model('VocabularioN2');
const VocabularioN1 = mongoose.model('VocabularioN1');

const models = [VocabularioN5, VocabularioN4, VocabularioN3, VocabularioN2, VocabularioN1];

exports.getDetailBuscaVocab = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
             "Vocabulary": userInput 
        };

        // Cria uma variável para armazenar o resultado
        let result = null;

        // Itera sobre todos os modelos e executa a consulta em cada um deles
        for (let model of models) {
            const vocabulario = await model.findOne(query);
            // Se um resultado for encontrado, armazena-o na variável result e interrompe o loop
            if (vocabulario) {
                result = vocabulario;
                break;
            }
        }

        res.json(result);
    } catch (error) {
        res.status(500).send(error);
    }
}