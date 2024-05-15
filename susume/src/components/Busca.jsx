import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rodape from "./Rodape";
import "./busca.css";
import verbos from "./verbos";
import Cabecalho from "./Cabecalho";

const Busca = () => {
    
    return (
        <div>
            <Cabecalho />

            <div className="container">
                <div className="containerResultadosBusca">
                    <div className="containerTermoBuscado">
                        <p className="tituloTermoBuscado">
                        Busca para:  
                        <br />
                        [TERMO BUSCADO]
                        </p>
                        <br />
                        <p className="textoTermoBuscado">
                        Esses são os resultados de sua busca para: “[TERMO BUSCADO]”
                        </p>
                        <br />
                        <p className="textoTermoBuscado">[Texto Verbo]</p>
                    </div>
                    <div className="containerListaResultados">
                        <ol>
                            <li>
                                <p className="tituloItemTermoBuscado">
                                    [PALAVRA]
                                </p>
                                <p className="textoItemTermoBuscado">
                                    [SIGNIFICADO]
                                </p>
                                <p className="textoItemTermoBuscado">
                                    <b> [PALAVRA, PRONUNCIA E GRUPO] </b>
                                </p>
                            </li>
                            <br />
                            <hr style={{borderTop: "1.5px solid black"}} />
                            <br />
                            
                        </ol>
                    </div>
                
                    <br></br>
                    <br></br>   

                    <br></br>
                    <br></br>
                </div>
            </div>
                    
            <Rodape />
        </div>
    );
};

export default Busca;
