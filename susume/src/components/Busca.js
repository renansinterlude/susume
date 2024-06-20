import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Rodape from "./Rodape";
import "./busca.css";
import Cabecalho from "./Cabecalho";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Busca = () => {
    const location = useLocation();
    const [termoBuscado, setTermoBuscado] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        // Extrai o termo buscado da query string
        const params = new URLSearchParams(location.search);
        const palavra = params.get('palavra');
        setTermoBuscado(palavra);
    }, [location]);

    useEffect(() => {
        if (termoBuscado) {
            // Faz a requisição à API de buscaGeral
            fetch(`http://localhost:3000/buscaGeral/${termoBuscado}`)
                .then(response => response.json())
                .then(data => {
                    setResultados(data);
                })
                .catch(error => {
                    console.error("Erro ao buscar dados:", error);
                });
                // Titulo da Página
                document.title = `Susume | Busca para “${termoBuscado}”`;
        }
    }, [termoBuscado]);

    return (
        <div>
            <Cabecalho />

            <div className="container">
                <div className="containerResultadosBusca">
                    <div className="containerTermoBuscado">
                        <p className="tituloTermoBuscado">
                            Busca para:
                            <br />
                            “{termoBuscado && termoBuscado.toUpperCase()}”
                        </p>
                        <br />
                        <p className="textoTermoBuscado">
                            Esses são os resultados de sua busca para: “{termoBuscado && termoBuscado.toUpperCase()}”
                        </p>
                        <br />
                        {resultados && resultados.some(item => item && item["Word-Type"] && item["Word-Type"].includes("Verbo")) && (
                            <p className="textoTermoBuscado">Percebemos que você talvez esteja procurando um <strong>verbo</strong>. Caso queira ver a classificação geral dos verbos <strong> <u><Link to="/verbos">clique aqui.</Link></u></strong> </p>
                        )}
                    </div>

                    <div className="containerListaResultados">
                        {resultados.length === 0 ? (
                            <center>
                                <p className="textoSemResultados">Não foram encontrados itens com os dados de pesquisa informados.</p>
                            </center>
                        ) : (
                            <ol>
                                {resultados.map((vocabulary, index) => (
                                    <div key={vocabulary.id}>
                                        <div className="containerAccordion">
                                            <div className="displayAccordionBusca">
                                                <Accordion elevation={0} className='accordionLarguraBusca'>
                                                    <AccordionSummary
                                                        expandIcon={<ArrowDownwardIcon />}
                                                        aria-controls={`panel${index + 1}-content`}
                                                        id={`panel${index + 1}-header`}
                                                        sx={{
                                                            backgroundColor: "#f2e6d8"
                                                        }}
                                                    >
                                                        <Typography>
                                                            <p className='kanji-vocabulario'>{vocabulary.Vocabulary || vocabulary.Kanji || 'Palavra Desconhecida'}</p>
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails sx={{
                                                        backgroundColor: "#f2e6d8"
                                                    }}>
                                                        <Typography>
                                                            {vocabulary.Translation}
                                                            <br />
                                                            <br />
                                                            <strong>
                                                                {vocabulary.Vocabulary ? (
                                                                    <>
                                                                        <p><strong>Leitura - {vocabulary.Reading} [{vocabulary.Pronunciation}]</strong></p>
                                                                        {vocabulary["Word-Type"].includes('Verbo') && <p></p>}
                                                                        <p>{vocabulary["Word-Type"]}</p>
                                                                    </>
                                                                ) : vocabulary.Kanji ? (
                                                                    <>
                                                                        <p><strong>Leitura On - {vocabulary["Reading-ON"]} <br />
                                                                        Leitura Kun - [{vocabulary["Reading-KUN"]}]</strong></p>
                                                                        <p>{vocabulary["Word-Type"]}</p>
                                                                    </>
                                                                ) : null}
                                                                <Link to={
                                                                    vocabulary && vocabulary["Word-Type"] && vocabulary["Word-Type"].includes('Verbo') ?
                                                                        `/detalhes-palavra-verbo/${vocabulary.Vocabulary}` :
                                                                        vocabulary && vocabulary.Vocabulary ?
                                                                            `/detalhes-palavra/${vocabulary.Vocabulary}` :
                                                                            vocabulary && vocabulary.Kanji ?
                                                                                `/detalhes-palavra-kanji/${vocabulary.Kanji}` :
                                                                                '#'
                                                                }>
                                                                    <p className='saibaMais'><u>SAIBA MAIS</u></p>
                                                                </Link>
                                                            </strong>
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        </div>
                                        <hr className="linhaBusca" />
                                    </div>
                                ))}
                            </ol>
                        )}
                    </div>

                    <br />
                    <br />

                    <br />
                    <br />
                </div>
            </div>

            <Rodape />
        </div>
    );
};

export default Busca;
