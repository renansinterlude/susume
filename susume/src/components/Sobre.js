import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import axios from 'axios'; 

const Sobre = () => {

    useEffect(() => {
        document.title = "Susume | Sobre";
        // Scroll to top ao mudar de página
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Cabecalho />
                <div className='container'>
                    <div className='containerSobre'>
                        <h1>Sobre nós</h1>
                        <br />
                        <p>
                        Susume é um dicionário que surgiu a partir da necessidade de estudantes da língua japonesa de ter fácil acesso a uma fonte completa e confiável de consulta e ajuda nos estudos da língua.

                        <br /><br />

                        Este site foi criado como Trabalho de Conclusão de Curso (TCC) de alunos do curso de Análise e Desenvolvimento de Sistema da Fatec Ipiranga.

                        <br /><br />

                        Por se tratar de um trabalho de graduação e projeto educacional este dicionário não tem fins lucrativos.

                        <br /><br />

                        Este site só foi possível graças às bases de dados open-source liberadas para modificação e uso.

                        <br /><br />

                        Caso tenha dúvidas, sugestões e reclamações sinta-se à vontade para entrar em contato conosco pelo e-mail abaixo:

                        <br />
                        <strong> <u>dicionario.susume@gmail.com </u></strong>

                        <br /><br /><br />

                        O desenvolvimento desse website só foi possível graças as fontes open-source respaldadas pela licença Creative Commons CC BY-SA 3.0 ou MIT License e seus devidos créditos serão dados a seguir:

                        <br /><br />

                        <strong>Base de Dados e Nivelamento dos Níveis do JLPT </strong>

                        <br /> 
                        
                        <strong>Jonathan Waller - Japanese Language Proficiency Test Resources</strong>
                        
                        <br />
                        
                        Website: <a href="https://www.tanos.co.uk/jlpt/"><u>https://www.tanos.co.uk/jlpt/</u></a>
                        
                        <br /><br />

                        <strong>API de Escrita dos Kanjis </strong>
                        
                        <br /> 
                        
                        <strong>Matthieu Bilbille - Draw Me a Kanji</strong>
                        
                        <br />
                        
                        Website: <a href="https://mbilbille.github.io/dmak/"><u>https://mbilbille.github.io/dmak/</u></a>
                        
                        <br />
                        
                        GitHub: <a href="https://github.com/mbilbille/dmak"><u>https://github.com/mbilbille/dmak</u></a>
                        
                        <br /><br />

                        <strong>Base de Dados de Vetores Gráficos para a Escrita de Kanji</strong>
                        
                        <br /> 
                        
                        <strong>Ulrich Apel - KanjiVG</strong>
                        
                        <br />
                        
                        Website: <a href="https://kanjivg.tagaini.net/index.html"><u>https://kanjivg.tagaini.net/index.html</u></a>
                        
                        <br />
                        
                        GitHub: <a href="https://github.com/KanjiVG/kanjivg"><u>https://github.com/KanjiVG/kanjivg</u></a>
                        
                        <br /><br /><br />

                        The development of this website was only possible thanks to open-source sources supported by the Creative Commons CC BY-SA 3.0 or MIT License and due credits will be given below:
                        
                        <br /><br />

                        <strong>Database and JLPT Levels</strong>
                        
                        <br /> 
                        
                        <strong>Jonathan Waller - Japanese Language Proficiency Test Resources</strong>
                        
                        <br />
                        
                        Website: <a href="https://www.tanos.co.uk/jlpt/"><u>https://www.tanos.co.uk/jlpt/</u></a>
                        
                        <br /><br />

                        <strong>Kanji Writing API</strong>
                        
                        <br /> 
                        
                        <strong>Matthieu Bilbille – Draw Me a Kanji</strong>
                        
                        <br />
                        
                        Website: <a href="https://mbilbille.github.io/dmak/"><u>https://mbilbille.github.io/dmak/</u></a>
                        
                        <br />
                        
                        GitHub: <a href="https://github.com/mbilbille/dmak"><u>https://github.com/mbilbille/dmak</u></a>
                        
                        <br /><br />

                        <strong>Database of Graphic Vectors for Writing Kanji</strong>
                        
                        <br /> 
                        
                        <strong>Ulrich Apel - KanjiVG</strong>
                        
                        <br />
                        
                        Website: <a href="https://kanjivg.tagaini.net/index.html"><u>https://kanjivg.tagaini.net/index.html</u></a>
                        
                        <br />
                        
                        GitHub: <a href="https://github.com/KanjiVG/kanjivg"><u>https://github.com/KanjiVG/kanjivg</u></a>
                        
                        <br />

                        </p>
                    </div>
                </div>
            <Rodape />
        </div>
    )
}

export default Sobre;