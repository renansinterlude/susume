const { getDetailBuscaKanji } = require("../controllers/buscaKanji.controller");

exports.getDetailBuscaKanjiRoutes = (app) => {
    app.get('/detalheBKanji/:userInput', getDetailBuscaKanji);
}