import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "./lista_verbos.css";
import { Link } from "react-router-dom";

const ListaVerbos = () => {
    return (
        <div>
            <Cabecalho />
                <div className="container">
                    <div className="container-lista-verbos">
                        <h1 className='titulo'>Lista de Verbos</h1>

                        <p className='texto'>Criamos listas com os verbos divididos pelos grupos em que fazem parte, clique para consultar os verbos de cada grupo. </p>
                        
                        <br></br>
                        <br></br>
                        <p className='texto'>Grupo I</p>
                        <p className='texto'>Grupo II</p>
                        <p className='texto'>Grupo III</p>
                        <br></br>
                        <br></br>
                        <div className="container-opcoes-verbos">
                            <Link to="/verbosgrupo1" className="link-sem-sublinhado">
                            <div className="opcoes-verbos grupo-1">
                                <p className='texto-verbos-opcao'> GRUPO I </p>
                            </div>
                            </Link>
                            <Link to="/verbosgrupo2" className="link-sem-sublinhado">
                            <div className="opcoes-verbos grupo-2">
                                <p className='texto-verbos-opcao'> GRUPO II </p>
                            </div>
                            </Link>
                            <Link to="/verbosgrupo3" className="link-sem-sublinhado">
                            <div className="opcoes-verbos grupo-3">
                                <p className='texto-verbos-opcao'> GRUPO III </p>
                            </div>
                            </Link>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>


                    </div>
                </div>
            <Rodape />
        </div>
    );
}

export default ListaVerbos;