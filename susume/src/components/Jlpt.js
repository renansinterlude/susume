import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "./jlpt.css";
import { Link } from "react-router-dom";

const Jlpt = () => {
    return (
        <div>
        <Cabecalho />
            <div className="container-conteudo">
                <div className="container-jlpt">
                    <h1 className="titulo"> Estude pelo JLPT </h1>
                    <p>Escolha o nível correspondente ao seu de acordo com as categorias do JLPT (Japanese-Language Proficiency Test). </p>
                    <br></br>
                    <p>N5: Introdutório</p>
                    <p>N4: Básico</p>
                    <p>N3: Intermediário</p>
                    <p>N2: Pré-Avançado</p>
                    <p>N1: Avançado</p>
                    <br></br>
                    <br></br>

                    <div className="container-jlpt-niveis">
                        <Link to="/jlpt-n5" className="link-sem-sublinhado">
                        <div className="nivel-jlpt n5"> <p className="texto-nivel-jlpt"> N5 </p></div>
                        </Link>
                        <Link to="/jlpt-n4" className="link-sem-sublinhado">
                        <div className="nivel-jlpt n4"> <p className="texto-nivel-jlpt"> N4 </p></div>
                        </Link>
                        <Link to="/jlpt-n3" className="link-sem-sublinhado">
                        <div className="nivel-jlpt n3"> <p className="texto-nivel-jlpt"> N3 </p></div>
                        </Link>
                        <Link to="/jlpt-n2" className="link-sem-sublinhado">
                        <div className="nivel-jlpt n2"> <p className="texto-nivel-jlpt"> N2 </p></div>
                        </Link>
                        <Link to="/jlpt-n1" className="link-sem-sublinhado">
                        <div className="nivel-jlpt n1"> <p className="texto-nivel-jlpt"> N1 </p></div>
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
    )
}

export default Jlpt;