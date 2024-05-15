const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const password = process.env.PASS;
const username = process.env.USER;
const dbname = process.env.NAME;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${dbname}.ba5deqt.mongodb.net/susume?retryWrites=true&w=majority&appName=susume`
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Banco de dados conectado com sucesso!");
});

db.on("error", (error) => {
    console.log("Erro ao conectar banco de dados: ", error);
});


app.use(express.json());

require("./models/vocabulario/vocabularioN5");
require("./models/vocabulario/vocabularioN4");
require("./models/vocabulario/vocabularioN3");
require("./models/vocabulario/vocabularioN2");
require("./models/vocabulario/vocabularioN1");
require("./models/kanjis/kanjiN5");
require("./models/kanjis/kanjiN4");
require("./models/kanjis/kanjiN3");
require("./models/kanjis/kanjiN2");
require("./models/kanjis/kanjiN1");
require("./models/verbos/verboG1");
require("./models/verbos/verboG2");
require("./models/verbos/verboG3");
// require("./models/gramatica/gramaticaN5");
// require("./models/gramatica/gramaticaN4");
// require("./models/gramatica/gramaticaN3");
// require("./models/gramatica/gramaticaN2");
// require("./models/gramatica/gramaticaN1");
require("./models/conjugacao/conjugacaoG1");
require("./models/conjugacao/conjugacaoG2");
require("./models/conjugacao/conjugacaoG3");
require("./routes")(app);


app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});