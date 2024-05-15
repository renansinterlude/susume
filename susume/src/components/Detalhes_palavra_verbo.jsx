import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "./detalhes_palavra.css";
import axios from 'axios'; // Assuming you installed Axios
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';

const DetalhesPalavraVerbo = () => {
    const { vocabulario } = useParams();
    /* a partir desse id, enviar uma solicitação pra api usando esse id pra ela retornar um objeto com as informações necessárias pra usar aqui */
    return (
        <div>
            <Cabecalho />
                <div className="container">
                    <div className="containerCaixasSignificado">
                        <div className="containerSignificado"> 
                        <p className="tituloPalavraSignificadoVerbo"> [VERBO] {vocabulario} </p> 
                        <b>
                        <p className="textoPalavraSignificadoVerbo"> [VERBO, PRONUNCIA E GRUPO] 読み上げる [yomi-ageru] - Verbo Regular Grupo II </p>
                        <p className="textoPalavraSignificadoVerbo"> [NIVEL JLPT] JLPT N5 </p>
                        <p className="textoPalavraSignificadoVerbo"> [TRAÇOS] 14 traços</p>
                        <p className="textoPalavraSignificadoVerbo"> [TRAÇOS2] 3 traços </p>
                    
                        </b>
                        <br />
                        <p className="textoPalavraSignificadoVerbo"> [SIGNIFICADO] </p>
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

                        <div className="containerExibirEscrita"> <p className="textoExibirConjugacao">EXIBIR <br /> ESCRITA</p> </div>
                    </div>
                </div>
            <Rodape />
        </div>
    )
}

export default DetalhesPalavraVerbo;