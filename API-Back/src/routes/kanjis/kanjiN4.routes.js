const {getKanjiN4, getDetailKN4} = require('../../controllers/kanjis/kanjiN4.controller');

exports.kanjiN4Routes = (app) => {
    app.get('/kanjiN4', getKanjiN4)
}

exports.getDetailKN4Routes = (app) => {
    app.get('/detalheKN4/:userInput', getDetailKN4)
}