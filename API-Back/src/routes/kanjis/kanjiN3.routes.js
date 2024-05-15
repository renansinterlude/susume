const {getKanjiN3, getDetailKN3} = require('../../controllers/kanjis/kanjiN3.controller');

exports.kanjiN3Routes = (app) => {
    app.get('/kanjiN3', getKanjiN3)
}

exports.getDetailKN3Routes = (app) => {
    app.get('/detalheKN3/:userInput', getDetailKN3)
}