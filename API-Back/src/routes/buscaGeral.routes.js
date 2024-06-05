const { getBuscaGeral} = require("../controllers/buscaGeral.controller");

exports.buscaGeralRoutes = (app) => {
  app.get("/buscaGeral/:userInput", getBuscaGeral);
};
