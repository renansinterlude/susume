import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "./detalhes_palavra.css";
import axios from 'axios'; // Assuming you installed Axios
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';

const G1DetalhesPalavraVerbo = () => {
    const { vocabulario } = useParams();
    /* a partir desse id, enviar uma solicitação pra api usando esse id pra ela retornar um objeto com as informações necessárias pra usar aqui */
    const [data, setData] = useState({}); // Estado para armazenar os dados da API

    useEffect(() => {
        // Função para buscar os dados da API
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/detalheVG1/${vocabulario}`);
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
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma ます - Polida</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma て</td>
                                                    <td>-</td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma た - Passado</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma なかった -  Negativa Passado</td>
                                                    <td>-</td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Passiva - 受身形</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Causativa - 使役形</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Passiva-Causativa - 使役受身形</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Potencial - 可能形</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Condicional - 仮定形</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Imperativa - 命令形</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Desiderativa - たい形</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Volitiva - 意向形</td>
                                                    <td> - </td>
                                                    <td> - </td>
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

export default G1DetalhesPalavraVerbo;