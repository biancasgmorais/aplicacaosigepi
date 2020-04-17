import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Navigation } from './styles';

import capacete from '~/assets/capacete.png';
import entrega from '~/assets/entrega.png';
import relatorio from '~/assets/relatorio.png';

export default function Modules() {
  return (
    <Container>
      <Navigation>
        <div className="epis">
          <img src={capacete} alt="EPI's" />
          <Link to="/listepis">
            <button type="submit">Gerenciar EPI's</button>
          </Link>
        </div>
        <div className="deliver">
          <img src={entrega} alt="Entregas" />
          <Link to="/listdelivers">
            <button type="submit">Gerenciar Entregas</button>
          </Link>
        </div>
        <div className="reports">
          <img src={relatorio} alt="Relatórios" />
          <Link to="/reports">
            <button type="submit">Relatórios</button>
          </Link>
        </div>
      </Navigation>
    </Container>
  );
}
