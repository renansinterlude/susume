import React, { useState } from 'react';
import './cabecalho.css';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (termoDeBusca.trim() === '') {
            setErro('Por favor, digite uma palavra para pesquisar.');
        } else {
            setErro('');
            // Navega para a página de busca com o termo de busca como parâmetro de rota
            window.location.href = `/busca?palavra=${encodeURIComponent(termoDeBusca)}`;
        }
    };

    return (
        <header>
            <div className="cabecalho">
                <Link to="/home">
                    <div className="logo">
                        <h3>ススメ！</h3>
                    </div>
                </Link>
                <div className="busca">
                    <form onSubmit={handleSubmit}>
                        <input
                            id="pesquisa"
                            className="input"
                            name="palavra"
                            required
                            value={termoDeBusca}
                            onChange={(event) => setTermoDeBusca(event.target.value)}
                            placeholder="DIGITE UMA PALAVRA"
                        />
                        <button type="submit">PESQUISAR</button>
                    </form>
                    {erro && <p className="erro">{erro}</p>}
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
};

export default Cabecalho;
