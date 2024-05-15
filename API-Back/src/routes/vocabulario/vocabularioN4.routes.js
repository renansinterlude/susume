const {getVocabularioN4, getDetailVN4} = require('../../controllers/vocabulario/vocabularioN4.controller');

exports.vocabularioN4Routes = (app) => {
    app.get('/vocabularioN4', getVocabularioN4)
}

exports.getDetailVN4Routes = (app) => {
    app.get('/detalheVN4/:userInput', getDetailVN4)
}