const {getVerboG2, getDetailVG2} = require('../../controllers/verbos/verboG2.controller');

exports.verboG2Routes = (app) => {
    app.get('/verboG2', getVerboG2)
}

exports.getDetailVG2Routes = (app) => {
    app.get('/detalheVG2/:userInput', getDetailVG2)
}