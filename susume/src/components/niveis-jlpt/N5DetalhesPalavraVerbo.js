import React, { useState, useEffect } from 'react';
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import "../detalhes_palavra.css";
import axios from 'axios';
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';

const N5DetalhesPalavra = () => {
    const { vocabulario } = useParams();
    const [data, setData] = useState({});
    const [secondData, setSecondData] = useState([]);

    // Scroll to top ao mudar de página
    window.scrollTo(0, 0);

    useEffect(() => {
        // Função para buscar os dados da API
        const fetchData = async () => {
            try {
                // Monta o URL da primeira API e faz a requisição
                const response = await axios.get(`http://localhost:3000/detalheVN5/${vocabulario}`);
                setData(response.data[0]);
                console.log(response.data)
                document.title = `Susume | Verbo ${vocabulario}`;

                // Verifica o tipo de verbo e monta o URL da segunda API
                let secondApiUrl;
                const wordType = response.data[0]["Word-Type"];
                if (wordType.includes("Verbo - Grupo 1")) {
                    secondApiUrl = `http://localhost:3000/detalheCG1/${vocabulario}`;
                } else if (wordType.includes("Verbo - Grupo 2")) {
                    secondApiUrl = `http://localhost:3000/detalheCG2/${vocabulario}`;
                } else if (wordType.includes("Verbo - Grupo 3")) {
                    secondApiUrl = `http://localhost:3000/detalheCG3/${vocabulario}`;
                } else {
                    // Se o tipo de verbo não for encontrado, não faz nada
                    console.error("Tipo de verbo não reconhecido");
                    return;
                }
                
                // Faz a requisição para a segunda API com o URL determinado
                const secondResponse = await axios.get(secondApiUrl);
                setSecondData(secondResponse.data[0]);
                console.log(secondResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [vocabulario]);

    const desenha = () => {
        var dmak = new window.Dmak(`${vocabulario}`, {
            'element': "kanjidesenho",
            "uri": "http://kanjivg.tagaini.net/kanjivg/kanji/"
        });
        console.log(dmak);

        var p = document.getElementById("p");
        p.onclick = function () {
            dmak.eraseLastStrokes(1);
        };

        var s = document.getElementById("s");
        s.onclick = function () {
            dmak.pause();
        };

        var g = document.getElementById("g");
        g.onclick = function () {
            dmak.render();
        };

        var n = document.getElementById("n");
        n.onclick = function () {
            dmak.renderNextStrokes(1);
        };

        var r = document.getElementById("r");
        r.onclick = function () {
            dmak.erase();
        };
    };

    return (
        <div>
            <Cabecalho />
                <div className="container">
                    <div className="containerCaixasSignificado">

                        <div className="containerSignificado"> 
                            {/* Palavra */}
                            <p className="tituloPalavraSignificado"> {vocabulario} </p>
                            
                            {/* Informações da Palavra */}
                            <b>
                            <p className="textoPalavraSignificado"> {data.Vocabulary} [{data.Pronunciation}] | {data["Word-Type"]} </p>
                            <p className="textoPalavraSignificado"> {data["Verb-Type"]}</p>
                            <p className="textoPalavraSignificado"> JLPT {data["JLPT-test"]} </p>
                            </b>

                            {/* Tradução da Palavra */}
                            <br />
                            <p className="textoPalavraSignificado"> {data.Translation} </p>
                            <br />
                        </div> {/* Fim do containerSignificado */}

                        {/* PopUp Exibir Conjugação */}
                        <Popup trigger={<button className='containerExibirConjugacao'> <p className="textoExibirEscrita">EXIBIR <br /> CONJUGAÇÃO </p> </button>} modal nested>
                            {close => (
                                <div className='popUpConjugacao'>
                                    <div className='container'>
                                        <div className='popUpCabecalho'>
                                            <div className="popUpTitulo">CONJUGAÇÃO</div>
                                            <div className="popUpFecharContainer">
                                                <button className="popUpFechar" onClick={() => close()}> 
                                                    ✕
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
                            )}
                        </Popup>

                        {/* PopUp Exibir Escrita */}
                        <Popup 
                            trigger={<button className='containerExibirConjugacao'> <p className="textoExibirEscrita">EXIBIR <br /> ESCRITA </p> </button>} 
                            modal 
                            nested
                            onOpen={() => desenha()}
                        >
                            {close => (
                                <div className='popUpConjugacao'>
                                    <div className='container'>
                                        <div className='popUpCabecalho'>
                                            <div className="popUpTitulo"> ESCRITA </div>
                                            <div className="popUpFecharContainer">
                                                <button className="popUpFechar" onClick={() => close()}>
                                                    ✕
                                                </button>
                                            </div>
                                        </div>
                                        <div className="popUpTabela">
                                            <div id="kanjidesenho"></div>
                                        </div>
                                        <div className="popUpBotoes">
                                            <button className="popupButton" id="s">■</button>
                                            <button className="popupButton" id="p">◄◄</button>
                                            <button className="popupButton" id="g">▶</button>
                                            <button className="popupButton" id="n">►►</button>
                                            <button className="popupButton" id="r">↻</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div> {/* Fim do containerCaixasSignificado */}
                </div> {/* Fim do container */}
                
            <Rodape />
        </div>
    )
}

export default N5DetalhesPalavra;