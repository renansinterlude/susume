import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import axios from 'axios'; // Assuming you installed Axios
import { Link } from 'react-router-dom';

const ComoUsar = () => {
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
                        </p>
                    </div>
                </div>
            <Rodape />
        </div>
    )
}

export default ComoUsar;