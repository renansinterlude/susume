const {getVocabularioN3, getDetailVN3} = require('../../controllers/vocabulario/vocabularioN3.controller');

exports.vocabularioN3Routes = (app) => {
    app.get('/vocabularioN3', getVocabularioN3)
}

exports.getDetailVN3Routes = (app) => {
    app.get('/detalheVN3/:userInput', getDetailVN3)
}