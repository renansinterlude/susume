const { getBuscaGeral, getDetailBuscaGeral } = require("../controllers/buscaGeral.controller");

exports.buscaGeralRoutes = (app) => {
  app.get("/buscaGeral/:userInput", getBuscaGeral);
};


exports.getDetailBuscaGeralRoutes = (app) => {
    app.get('/detalheBG/:userInput', getDetailBuscaGeral);
}