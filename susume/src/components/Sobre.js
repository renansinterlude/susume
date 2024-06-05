import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import axios from 'axios'; // Assuming you installed Axios

const Sobre = () => {
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
                        </p>
                    </div>
                </div>
            <Rodape />
        </div>
    )
}

export default Sobre;