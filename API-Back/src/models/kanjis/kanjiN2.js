const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kanjiN2Schema = new Schema({
    id: { type: String},
    Kanji: { type: String},
    Strokes: { type: String},
    "JLPT-test": { type: String},
    Reading: { type: String},
    "On-Reading": { type: String},
    "Kun-Reading": { type: String},
    Translation: { type: String}
});


module.exports = mongoose.model("KanjiN2", kanjiN2Schema);