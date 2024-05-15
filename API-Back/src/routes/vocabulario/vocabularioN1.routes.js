const {getVocabularioN1, getDetailVN1} = require('../../controllers/vocabulario/vocabularioN1.controller');

exports.vocabularioN1Routes = (app) => {
    app.get('/vocabularioN1', getVocabularioN1)
}

exports.getDetailVN1Routes = (app) => {
    app.get('/detalheVN1/:userInput', getDetailVN1)
}