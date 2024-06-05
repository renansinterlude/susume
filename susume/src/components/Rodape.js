import React from 'react';
import './rodape.css';
import { Link } from 'react-router-dom';

const Rodape = () => {
    return (
        <footer>
          <div id="rodape">
            <div className="r1">
              <ul>
                <li>
                  <Link to="/como-usar">COMO USAR</Link>
                </li>
                <li>
                  <Link to="/home">HOME</Link>
                </li>
              </ul>
            </div>
            <div className="logo-rodape">
              <h4>ススメ！</h4>
            </div>
            <div className="r2">
              <ul>
                <li>
                  <Link to="/sobre">SOBRE</Link>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p>&copy; 2024 susume. Todos os direitos reservados.</p>
              <p>Desenvolvido por Giulia, Maria Alicia e Renan.</p>
            </div>
          </div>
        </footer>
    );
}

export default Rodape;