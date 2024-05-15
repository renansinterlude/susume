const {getKanjiN2, getDetailKN2} = require('../../controllers/kanjis/kanjiN2.controller');

exports.kanjiN2Routes = (app) => {
    app.get('/kanjiN2', getKanjiN2)
}

exports.getDetailKN2Routes = (app) => {
    app.get('/detalheKN2/:userInput', getDetailKN2)
}