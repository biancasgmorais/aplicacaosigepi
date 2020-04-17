import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container } from './styles';

import relatorio from '~/assets/relatorio.png';
import voltar from '~/assets/botaovoltar1.png';

import searchFunction from './searchFunction';
import toPdf from './toPdf';

export default function Reports() {
  const [delivers, setDelivers] = useState([]);

  useEffect(() => {
    const loadDelivers = async () => {
      const response = await api.get(`delivers`);

      const DeliversFormated = response.data.map((deliverLocated) => ({
        ...deliverLocated,
        date_delivery: deliverLocated.date_delivery,
        date_delivery_formated: format(
          parseISO(deliverLocated.date_delivery),
          "dd'/'MM'/'yyyy",
          {
            locale: pt,
          }
        ),
      }));
      setDelivers(DeliversFormated);
    };
    loadDelivers();
  }, []);

  return (
    <Container>
      <img src={relatorio} alt="reports" />
      <h1>Relatórios</h1>

      <div className="nv">
        <input id="myInput" placeholder="Busca" onChange={searchFunction} />
      </div>

      <div className="tabela" id="tabela">
        <table border="1" border-color="#243e6a" cellpadding="3" id="myTable">
          <tr>
            <th>Data de Entrega</th>
            <th>Funcionário</th>
            <th>Mat. SIG</th>
            <th>EPI</th>
            <th>Nº do CA</th>
            <th>Quantidade</th>
          </tr>

          {delivers.map((deliver) => (
            <tr key={deliver.name_user}>
              <td>{deliver.date_delivery_formated}</td>
              <td>{deliver.name_user}</td>
              <td>{deliver.registration_user}</td>
              <td>{deliver.name_epi}</td>
              <td>{deliver.numberca_epi}</td>
              <td>{deliver.amount_epi}</td>
            </tr>
          ))}
        </table>
      </div>
      <button type="button" onClick={toPdf}>
        Gerar PDF
      </button>
      <div className="back">
        <Link to="/modules">
          <img src={voltar} alt="voltar" />
        </Link>
      </div>
    </Container>
  );
}
