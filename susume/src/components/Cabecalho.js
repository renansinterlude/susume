import React, { useState } from 'react';
import './cabecalho.css';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
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
                    {/* Modifica o formulário para controlar o envio manualmente */}
                    <form>
                        <input
                            id="pesquisa"
                            className="input"
                            name="palavra"
                            required
                            value={termoDeBusca}
                            onChange={(event) => setTermoDeBusca(event.target.value)}
                            placeholder="DIGITE UMA PALAVRA"
                        />
                        {/* Navega para a página de busca com o termo de busca como parâmetro de rota */}
                        <Link to={`/busca?palavra=${encodeURIComponent(termoDeBusca)}`}>
                            <button type="submit">PESQUISAR</button>
                        </Link>
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
