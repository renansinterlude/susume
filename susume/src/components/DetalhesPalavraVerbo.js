import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "./detalhes_palavra.css";
import axios from 'axios'; // Assuming you installed Axios
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';

const DetalhesPalavraVerbo = () => {
    const { vocabulario } = useParams();
    /* a partir desse id, enviar uma solicitação pra api usando esse id pra ela retornar um objeto com as informações necessárias pra usar aqui */
    const [data, setData] = useState({}); // Estado para armazenar os dados da API
    const [secondData, setSecondData] = useState([]); // Estado para armazenar os dados da segunda API

    useEffect(() => {
        // Função para buscar os dados da API
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/detalheBVocab/${vocabulario}`);
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [vocabulario]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/detalheBVocab/${vocabulario}`);
                setData(response.data);
                console.log(response.data)
                
                // Verifica o tipo de verbo e monta o URL da segunda API
                let secondApiUrl;
                const wordType = response.data["Word-Type"];
                if (wordType.includes("Verbo - Grupo 1")) {
                    secondApiUrl = `http://localhost:3000/detalheCG1/${vocabulario}`;
                    // console.log("API1 URL: ", secondApiUrl);
                } else if (wordType.includes("Verbo - Grupo 2")) {
                    secondApiUrl = `http://localhost:3000/detalheCG2/${vocabulario}`;
                    // console.log("API2 URL: ", secondApiUrl);
                } else if (wordType.includes("Verbo - Grupo 3")) {
                    secondApiUrl = `http://localhost:3000/detalheCG3/${vocabulario}`;
                    // console.log("API3 URL: ", secondApiUrl);
                } else {
                    // Se o tipo de verbo não for encontrado, não faz nada
                    console.error("Tipo de verbo não reconhecido");
                    return;
                }
                
                // Faz a requisição para a segunda API com o URL determinado
                const secondResponse = await axios.get(secondApiUrl);
                setSecondData(secondResponse.data[0]);
                // console.log(secondData);
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

                        <p className="textoPalavraSignificado"> {data.Vocabulary} [{data.Pronunciation}] | {data["Word-Type"]} </p>
                        <p className="textoPalavraSignificado"> {data["Verb-Type"]}</p>
                        <p className="textoPalavraSignificado"> JLPT {data["JLPT-test"]} </p>
                        {/* {vocabulary["Word-Type"]} */}
                        {/* {data?.tipo} */}
                        
                        </b>
                        <br />
                        <p className="textoPalavraSignificado"> {data.Translation} </p>
                        <br />
                        </div>

                        <Popup trigger=
                            {<button className='containerExibirConjugacao'> <p className="textoExibirEscrita">EXIBIR <br /> CONJUGAÇÃO </p> </button>} 
                            modal nested>
                            {
                                close => (
                                    <div className='popUpConjugacao'>
                                        <div className='container'>
                                            <div className='popUpCabecalho'>
                                                <div className="popUpTitulo">CONJUGAÇÃO</div>
                                                <div className="popUpFecharContainer">
                                                <button className="popUpFechar" onClick=
                                                    {() => close()}>
                                                        X
                                                </button>
                                                </div>
                                            </div>
                                            <div className="popUpTabela">
                                            <table>
                                                <thead>
                                                    <tr>
                                                    <th>FORMA</th>
                                                    <th>AFIRMATIVA</th>
                                                    <th>NEGATIVA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>Forma Dicionário 辞書形</td>
                                                    <td> {secondData["Dictionary-Form"]} </td>
                                                    <td> {secondData.Negative} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma ます - Polida</td>
                                                    <td> {secondData["Masu-Form"]} </td>
                                                    <td> {secondData["Negative-Masu"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma て</td>
                                                    <td> {secondData["Te-Form"]}</td>
                                                    <td> {secondData["Negative-Te"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma た - Passado</td>
                                                    <td> {secondData["Past-Form"]} </td>
                                                    <td> {secondData["Negative-Past"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Passiva - 受身形</td>
                                                    <td> {secondData["Passive-Form"]} </td>
                                                    <td> {secondData["Negative-Passive"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Causativa - 使役形</td>
                                                    <td> {secondData["Causative-Form"]} </td>
                                                    <td> {secondData["Negative-Causative"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Passiva-Causativa - 使役受身形</td>
                                                    <td> {secondData["CausativePassive-Form"]} </td>
                                                    <td> {secondData["Negative-CausativePassive"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Potencial - 可能形</td>
                                                    <td> {secondData["Potential-Form"]} </td>
                                                    <td> {secondData["Negative-Potential"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Condicional - 仮定形</td>
                                                    <td> {secondData["Conditional-Form"]} </td>
                                                    <td> {secondData["Negative-Conditional"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Imperativa - 命令形</td>
                                                    <td> {secondData["Imperative-Form"]} </td>
                                                    <td> {secondData["Negative-Imperative"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Desiderativa - たい形</td>
                                                    <td> {secondData["Desiderative-Form"]} </td>
                                                    <td> {secondData["Negative-Desiderative"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Volitiva - 意向形</td>
                                                    <td> {secondData["Volitional-Form"]} </td>
                                                    <td> {secondData["Negative-Volitional"]} </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        
                                        
                                        </div>
                                    </div>
                                )
                            }
                        </Popup>
                       
                    </div>
                </div>
                
            <Rodape />
        </div>
    )
}

export default DetalhesPalavraVerbo;