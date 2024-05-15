import React, { useState, useEffect } from 'react';
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import axios from 'axios'; // Assuming you installed Axios

const ComoUsar = () => {
    return (
        <div>
            <Cabecalho />
                Como usar
            <Rodape />
        </div>
    )
}

export default ComoUsar;