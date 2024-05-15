import React, { useState, useEffect } from 'react';
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import "../detalhes_palavra.css";
import axios from 'axios'; // Assuming you installed Axios
import 'reactjs-popup/dist/index.css';
import { useParams } from 'react-router-dom';

const N3DetalhesPalavra = () => {
    const { vocabulario } = useParams();
    /* a partir desse id, enviar uma solicitação pra api usando esse id pra ela retornar um objeto com as informações necessárias pra usar aqui */
    const [data, setData] = useState({}); // Estado para armazenar os dados da API

    useEffect(() => {
        // Função para buscar os dados da API
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/detalheVN3/${vocabulario}`);
                setData(response.data[0]);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [vocabulario]);

    return (
        <div>
            <Cabecalho />
                <div className="container">
                    <div className="containerCaixasSignificado">
                        <div className="containerSignificado"> 
                        <p className="tituloPalavraSignificado"> {/* Palavra */} {vocabulario} </p>
                        
                        <b>
                        <p className="textoPalavraSignificado"> {data["Word-Type"]}</p>
                        {/* {vocabulary["Word-Type"]} */}
                        {/* {data?.tipo} */}
                        <p className="textoPalavraSignificado"> {data.Strokes} traços </p>
                        <p className="textoPalavraSignificado"> JLPT {data["JLPT-test"]} </p>
                        <p className="textoPalavraSignificado"> Leitura - {data["Reading"]} [{data.Pronunciation}] </p>
                        </b>
                        <br />
                        <p className="textoPalavraSignificado"> {data.Translation} </p>
                        <br />
                        </div>
                       
                    </div>
                </div>
                
            <Rodape />
        </div>
    )
}

export default N3DetalhesPalavra;