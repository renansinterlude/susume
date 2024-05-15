const {getVocabularioN5, getDetailVN5} = require('../../controllers/vocabulario/vocabularioN5.controller');

exports.vocabularioN5Routes = (app) => {
    app.get('/vocabularioN5', getVocabularioN5)
}

exports.getDetailVN5Routes = (app) => {
    app.get('/detalheVN5/:userInput', getDetailVN5)
}