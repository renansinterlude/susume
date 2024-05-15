const {getConjugacaoG1, getDetailCG1} = require('../../controllers/conjugacao/conjugacaoG1.controller');

exports.conjugacaoG1Routes = (app) => {
    app.get('/conjugacaoG1', getConjugacaoG1)
}

exports.getDetailCG1Routes = (app) => {
    app.get('/detalheCG1/:userInput', getDetailCG1)
}