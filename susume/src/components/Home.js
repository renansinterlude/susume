import React, { useEffect } from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "./home.css";
import { Link } from "react-router-dom";

const Home = ( ) => {
  useEffect(() => {
      const desenha = () => {
        var dmak = new window.Dmak('電車', {
          'element': "abc",
          "uri": "http://kanjivg.tagaini.net/kanjivg/kanji/"
        });
        console.log(dmak)
      }
      desenha()
    }, [])
    return (

      
        <div>
        <Cabecalho />
        <div id="abc">

        </div>
        <div className="container">
            <div className="container-home">
                <h1 className='titulo'> Comece por aqui</h1>
                <p className='texto'>Se você não sabe por onde começar busque uma palavra: <br></br> verbo, substantivo, adjetivo etc. </p>
                <br></br>
                <br></br>
                <p className='texto'> Caso já tenha uma ideia do que está buscando, 
                escolha alguma das opções abaixo:</p>

                <br></br>
                <br></br>

                <div className="container-opcoes-home">
                    <Link to="/jlpt" className="link-sem-sublinhado">
                    <div className="opcoes-home opcao-jlpt">
                        <p className='texto-home-opcao'> ESTUDE <br></br> PELO <br></br> JLPT</p>
                    </div>
                    </Link>
                    <Link to="/verbos" className="link-sem-sublinhado"> 
                    <div className="opcoes-home opcao-verbo">
                        <p className='texto-home-opcao'> LISTA DE <br></br> VERBOS </p>
                    </div>
                    </Link>
                </div>

                <br></br>
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

export default Home;
