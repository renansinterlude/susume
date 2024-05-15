const {getVerboG3, getDetailVG3} = require('../../controllers/verbos/verboG3.controller');

exports.verboG3Routes = (app) => {
    app.get('/verboG3', getVerboG3)
}

exports.getDetailVG3Routes = (app) => {
    app.get('/detalheVG3/:userInput', getDetailVG3)
}