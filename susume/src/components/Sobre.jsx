import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import axios from 'axios'; // Assuming you installed Axios

const Sobre = () => {
    return (
        <div>
            <Cabecalho />
                Sobre
            <Rodape />
        </div>
    )
}

export default Sobre;