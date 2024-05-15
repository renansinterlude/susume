const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conjugacaoG1Schema = new Schema({
    id: { type: String },
    Verb: { type: String },
    "Dictionary-Form": { type: String },
    "Masu-Form": { type: String },
    "Te-Form": { type: String },
    "Past-Form": { type: String },
    "Passive-Form": { type: String },
    "Causative-Form": { type: String },
    "CausativePassive-Form": { type: String },
    "Potential-Form": { type: String },
    "Conditional-Form": { type: String },
    "Imperative-Form": { type: String },
    "Desiderative-Form": { type: String },
    "Volitional-Form": { type: String },
    Negative: { type: String },
    "Negative-Masu": { type: String },
    "Negative-Te": { type: String },
    "Negative-Past": { type: String },
    "Negative-Passive": { type: String },
    "Negative-Causative": { type: String },
    "Negative-CausativePassive": { type: String },
    "Negative-Potential": { type: String },
    "Negative-Conditional": { type: String },
    "Negative-Imperative": { type: String },
    "Negative-Desiderative": { type: String },
    "Negative-Volitional": { type: String }
});


module.exports = mongoose.model("ConjugacaoG1", conjugacaoG1Schema);