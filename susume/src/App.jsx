import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you installed Axios

const VocabList = () => {
  const [vocabularies, setVocabularies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/verboG3') // Replace with your actual backend URL if different
        .then(vocabularies => setVocabularies(vocabularies.data))
      } catch (error) {
        console.error('Error fetching vocabularies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Vocabulário</h1>
      <ul>
        {vocabularies.map(vocabulary => (
            <li>
              <p>{vocabulary.id}</p>
              <p>{vocabulary.Translation}</p>
              <p>Vocabulário: {vocabulary.Vocabulary}</p>
              <p>Traços: {vocabulary.Strokes}</p>
              <p>JLPT: {vocabulary["JLPT-test"]}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};


// id: { type: String },
//     Vocabulary: { type: String },
//     Strokes: { type: String },
//     "JLPT-test": { type: String },
//     "Word-Type": { type: String },
//     "Verb-Type": { type: String },
//     "Verb-Ending": { type: String },
//     Reading: { type: String },
//     Pronunciation: { type: String },
//     Translation: { type: String },

export default VocabList;