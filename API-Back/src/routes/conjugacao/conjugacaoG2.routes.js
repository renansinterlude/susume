const {getConjugacaoG2, getDetailCG2} = require('../../controllers/conjugacao/conjugacaoG2.controller');

exports.conjugacaoG2Routes = (app) => {
    app.get('/conjugacaoG2', getConjugacaoG2)
}

exports.getDetailCG2Routes = (app) => {
    app.get('/detalheCG2/:userInput', getDetailCG2)
}