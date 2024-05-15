const {getVocabularioN2, getDetailVN2} = require('../../controllers/vocabulario/vocabularioN2.controller');

exports.vocabularioN2Routes = (app) => {
    app.get('/vocabularioN2', getVocabularioN2)
}

exports.getDetailVN2Routes = (app) => {
    app.get('/detalheVN2/:userInput', getDetailVN2)
}