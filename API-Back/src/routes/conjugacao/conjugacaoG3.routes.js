const {getConjugacaoG3, getDetailCG3} = require('../../controllers/conjugacao/conjugacaoG3.controller');

exports.conjugacaoG3Routes = (app) => {
    app.get('/conjugacaoG3', getConjugacaoG3)
}


exports.getDetailCG3Routes = (app) => {
    app.get('/detalheCG3/:userInput', getDetailCG3)
}