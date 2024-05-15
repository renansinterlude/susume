const {getVerboG1, getDetailVG1} = require('../../controllers/verbos/verboG1.controller');

exports.verboG1Routes = (app) => {
    app.get('/verboG1', getVerboG1)
}

exports.getDetailVG1Routes = (app) => {
    app.get('/detalheVG1/:userInput', getDetailVG1)
}