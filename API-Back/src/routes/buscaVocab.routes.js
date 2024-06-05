const { getDetailBuscaVocab } = require("../controllers/buscaVocab.controller");

exports.getDetailBuscaVocabRoutes = (app) => {
    app.get('/detalheBVocab/:userInput', getDetailBuscaVocab);
}