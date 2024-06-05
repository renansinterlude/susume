import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import axios from 'axios'; 
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';

const G3DetalhesPalavraVerbo = () => {
    const { vocabulario } = useParams();
    const [data, setData] = useState({}); // Estado para armazenar os dados da primeira API
    const [secondData, setSecondData] = useState([]); // Estado para armazenar os dados da segunda API

    useEffect(() => {
        // Função para buscar os dados da primeira API
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/detalheVG3/${vocabulario}`);
                setData(response.data[0]);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching first data:', error);
            }
        };

        fetchData();
    }, [vocabulario]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/detalheVG3/${vocabulario}`);
            setData(response.data[0]);
            
            // Verifica o tipo de verbo e monta o URL da segunda API
            let secondApiUrl;
            const wordType = response.data[0]["Word-Type"];
            if (wordType.includes("Verbo - Grupo 1")) {
                secondApiUrl = `http://localhost:3000/detalheCG1/${vocabulario}`;
            } else if (wordType.includes("Verbo - Grupo 2")) {
                secondApiUrl = `http://localhost:3000/detalheCG2/${vocabulario}`;
            } else if (wordType.includes("Verbo - Grupo 3")) {
                secondApiUrl = `http://localhost:3000/detalheCG3/${vocabulario}`;
            } else {
                // Se o tipo de verbo não for encontrado, não faz nada
                console.error("Tipo de verbo não reconhecido");
                return;
            }
            
            // Faz a requisição para a segunda API com o URL determinado
            const secondResponse = await axios.get(secondApiUrl);
            setSecondData(secondResponse.data[0]);
            console.log(secondResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [vocabulario]);


    return (
        <div>
            <Cabecalho />
            <div className="container">
                <div className="containerCaixasSignificado">
                    <div className="containerSignificado"> 
                        <p className="tituloPalavraSignificado"> {/* Palavra */} {vocabulario} </p>
                        
                        <b>
                            <p className="textoPalavraSignificado"> {data.Vocabulary} [{data.Pronunciation}] | {data["Word-Type"]} </p>
                            <p className="textoPalavraSignificado"> {data["Verb-Type"]}</p>
                            <p className="textoPalavraSignificado"> JLPT {data["JLPT-test"]} </p>
                        </b>
                        <br />
                        <p className="textoPalavraSignificado"> {data.Translation} </p>
                        <br />
                    </div>

                    <Popup trigger={<button className='containerExibirConjugacao'> <p className="textoExibirEscrita">EXIBIR <br /> CONJUGAÇÃO </p> </button>} modal nested>
                        {close => (
                            <div className='popUpConjugacao'>
                                <div className='container'>
                                    <div className='popUpCabecalho'>
                                        <div className="popUpTitulo">CONJUGAÇÃO</div>
                                        <div className="popUpFecharContainer">
                                            <button className="popUpFechar" onClick={() => close()}>X</button>
                                        </div>
                                    </div>
                                    <div className="popUpTabela">
                                            <table>
                                                <thead>
                                                    <tr>
                                                    <th>FORMA</th>
                                                    <th>AFIRMATIVA</th>
                                                    <th>NEGATIVA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>Forma Dicionário 辞書形</td>
                                                    <td> {secondData["Dictionary-Form"]} </td>
                                                    <td> {secondData.Negative} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma ます - Polida</td>
                                                    <td> {secondData["Masu-Form"]} </td>
                                                    <td> {secondData["Negative-Masu"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma て</td>
                                                    <td> {secondData["Te-Form"]}</td>
                                                    <td> {secondData["Negative-Te"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma た - Passado</td>
                                                    <td> {secondData["Past-Form"]} </td>
                                                    <td> {secondData["Negative-Past"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Passiva - 受身形</td>
                                                    <td> {secondData["Passive-Form"]} </td>
                                                    <td> {secondData["Negative-Passive"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Causativa - 使役形</td>
                                                    <td> {secondData["Causative-Form"]} </td>
                                                    <td> {secondData["Negative-Causative"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Voz Passiva-Causativa - 使役受身形</td>
                                                    <td> {secondData["CausativePassive-Form"]} </td>
                                                    <td> {secondData["Negative-CausativePassive"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Potencial - 可能形</td>
                                                    <td> {secondData["Potential-Form"]} </td>
                                                    <td> {secondData["Negative-Potential"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Condicional - 仮定形</td>
                                                    <td> {secondData["Conditional-Form"]} </td>
                                                    <td> {secondData["Negative-Conditional"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Imperativa - 命令形</td>
                                                    <td> {secondData["Imperative-Form"]} </td>
                                                    <td> {secondData["Negative-Imperative"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Desiderativa - たい形</td>
                                                    <td> {secondData["Desiderative-Form"]} </td>
                                                    <td> {secondData["Negative-Desiderative"]} </td>
                                                    </tr>
                                                    <tr>
                                                    <td>Forma Volitiva - 意向形</td>
                                                    <td> {secondData["Volitional-Form"]} </td>
                                                    <td> {secondData["Negative-Volitional"]} </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
            <Rodape />
        </div>
    );
}

export default G3DetalhesPalavraVerbo;
