const {getKanjiN1, getDetailKN1} = require('../../controllers/kanjis/kanjiN1.controller');

exports.kanjiN1Routes = (app) => {
    app.get('/kanjiN1', getKanjiN1)
}

exports.getDetailKN1Routes = (app) => {
    app.get('/detalheKN1/:userInput', getDetailKN1)
}