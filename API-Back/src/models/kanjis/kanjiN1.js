const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kanjiN1Schema = new Schema({
    "id": { type: String},
    "Kanji": { type: String},
    "Strokes": { type: String},
    "JLPT-test": { type: String},
    "Reading-ON": { type: String},
    "Reading-KUN": { type: String},
    "Search-Key": { type: String},
    "On-Reading": { type: String},
    "Kun-Reading": { type: String},
    "Translation": { type: String},
});


module.exports = mongoose.model("KanjiN1", kanjiN1Schema);