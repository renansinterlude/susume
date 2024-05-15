const {getKanjiN5, getDetailKN5} = require('../../controllers/kanjis/kanjiN5.controller');

exports.kanjiN5Routes = (app) => {
    app.get('/kanjiN5', getKanjiN5)
}

exports.getDetailKN5Routes = (app) => {
    app.get('/detalheKN5/:userInput', getDetailKN5)
}