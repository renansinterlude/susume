import React, { useState, useEffect } from 'react';
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import "../detalhes_palavra.css";
import axios from 'axios';
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';

const N3DetalhesPalavraKanji = () => {
    const { vocabulario } = useParams();
    const [data, setData] = useState({});

    // Scroll to top ao mudar de página
    window.scrollTo(0, 0);

    useEffect(() => {
        // Função para buscar os dados da API
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/detalheKN3/${vocabulario}`);
                setData(response.data[0]);
                console.log(response.data)
                document.title = `Susume | Kanji ${vocabulario}`;
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
                        <p className="tituloPalavraSignificado"> {/* Palavra */} {vocabulario} </p>
                        
                        <b>
                        {/* {vocabulary["Word-Type"]} */}
                        {/* {data?.tipo} */}
                        <p className="textoPalavraSignificado"> {data.Strokes} traços </p>
                        <p className="textoPalavraSignificado"> JLPT {data["JLPT-test"]} </p>
                        <p className="textoPalavraSignificado"> Leitura On - {data["Reading-ON"]} [{data["On-Reading"]}] </p>
                        <p className="textoPalavraSignificado"> Leitura Kun - {data["Reading-KUN"]} [{data["Kun-Reading"]}] </p>
                        </b>
                        <br />
                        <p className="textoPalavraSignificado"> {data.Translation} </p>
                        <br />
                        </div>

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
                       
                    </div>
                </div>
                
            <Rodape />
        </div>
    )
}

export default N3DetalhesPalavraKanji;