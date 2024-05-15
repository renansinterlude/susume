import React from "react";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import "./niveis-jlpt.css";
import { Link } from "react-router-dom";

const N2 = () => {
    return (
        <div>
            <Cabecalho />
            <div className="container-conteudo">
                    <div className="container-jlpt-50">
                        <h1 className="titulo"> JLPT N2 </h1>
                        <p className="texto">Escolha o modelo de estudos que planeja seguir. </p>
                        <p className="texto">Caso queira estudar de acordo com os kanjis essenciais definidos pelo <br></br> Ministério da Educação do Japão - Joyou Kanji, siga para a página de Kanji. </p>
                        <br></br>
                        <p className="texto">Caso queira estudar de acordo com a gramática e vocabulário <br></br> essenciais para cada nível do JLPT, siga para a página de <br></br> Vocabulário. </p>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="container-jlpt-tipo">
                            <Link to="/jlpt-n2-kanji" className="link-sem-sublinhado">
                            <div className="tipo-estudo cor-kanji"> <p className="texto-tipo-estudo"> KANJI </p> </div>
                            </Link>
                            <Link to="/jlpt-n2-vocabulario" className="link-sem-sublinhado">
                            <div className="tipo-estudo cor-vocabulario"> <p className="texto-tipo-estudo"> VOCABULÁRIO </p> </div>
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

export default N2;