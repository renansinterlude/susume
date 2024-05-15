import React, { useState } from 'react';
import './cabecalho.css';
import { Link } from 'react-router-dom';

const Cabecalho = (props) => {
    const [termoDeBusca, setTermoDeBusca] = useState('');
    
    return (
        <header>
            <div className="cabecalho">
                <Link to="/home">
                <div className="logo">
                <h3>ススメ！</h3>
                </div>
                </Link>
                <div className="busca">
                <form action="busca">
                    <input
                    id="pesquisa"
                    className="input"
                    name="buscar"
                    required
                    onChange={(termoDigitado) => setTermoDeBusca(termoDigitado) }
                    placeholder="DIGITE UMA PALAVRA"
                    />
                    {/* <button type="submit" onClick={() => { props.onBuscaRealizada(termoDeBusca)}}> */}
                    <button>
                    PESQUISAR
                    </button>
                </form>
                </div>
                <div className="menu">
                <Link to="/home">
                    <span>HOME</span>
                </Link>
                <Link to="/jlpt">
                    <span>ESTUDE PELO JLPT</span>
                </Link>
                <Link to="/como-usar">
                    <span>COMO USAR</span>
                </Link>
                <Link to="/sobre">
                    <span>SOBRE NÓS</span>
                </Link>
                </div>
            </div>
        </header>
    );
}

export default Cabecalho;