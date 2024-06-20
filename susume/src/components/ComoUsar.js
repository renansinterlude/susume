import React, { useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { Link } from 'react-router-dom';

const ComoUsar = () => {
    useEffect(() => {
        document.title = "Susume | Como usar";
        // Scroll to top ao mudar de página
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Cabecalho />
                <div className='container'>
                    <div className='containerComoUsar'>
                        <h1>Como usar</h1>
                        <br />

                        <p>

                        Você pode utilizar a barra de pesquisa superior para pesquisar palavras nos seguintes formatos:
                        <br /><br />
                        
                        <strong>Português</strong>
                        <br />
                        <span className='exemploComoUsar'>ex: </span>livro, escola, aula

                        <br /><br />

                        <strong>Romaji</strong>
                        <br />
                        <span className='exemploComoUsar'>ex: </span>hon, gakkou, jugyou

                        <br /><br />
                        
                        <strong>Hiragana</strong>
                        <br />
                        <span className='exemploComoUsar'>ex: </span>ほん、がっこう、じゅぎょう

                        <br /><br />

                        <strong>Katakana</strong>
                        <br />
                        <span className='exemploComoUsar'>ex: </span>ホン、ガッコウ、ジュギョウ

                        <br /><br />

                        <strong>Kanji</strong>
                        <br />
                        <span className='exemploComoUsar'>ex: </span>本、学校、授業

                        <br /><br />

                        Caso tenha interesse também temos listas temáticas compiladas, acesse pela página home, ou pelos links abaixo:
                        <br />
                        <Link to="/verbos">
                        <strong><u>Lista de Verbos</u></strong>
                        </Link>

                        <br /><br /><br />

                        <strong>Escrita dos Kanjis</strong>

                        <br />
                        
                        Ao utilizar o card para exibir a lista de kanjis você pode se deparar com os botões:

                        <br /><br />

                        ■ [parar]

                        <br /><br />

                        ◄◄ [retroceder]

                        <br /><br />

                        ▶ [play]

                        <br /><br />

                        ►► [avançar]

                        <br /><br />

                        ↻ [restart]

                        <br /><br />

                        Caso queira utilizar alguma das funções pare a execução da escrita ■ [parar] e siga com alguma das opções ◄◄ [retroceder], ►► [avançar] ou ↻ [restart]. Caso queira continuar a execução a partir de um ponto utilize ▶ [play] ou ↻ [restart].
                        
                        <br />
                        </p>
                    </div>
                </div>
            <Rodape />
        </div>
    )
}

export default ComoUsar;