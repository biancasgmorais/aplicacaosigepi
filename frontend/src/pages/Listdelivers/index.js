import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';
import entrega from '~/assets/entrega.png';
import voltar from '~/assets/botaovoltar1.png';

import searchFunction from './searchFunction';

export default function Listdelivers() {
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

  const handleDelete = async (deliver) => {
    try {
      if (window.confirm(`Confirma a exclusão da entrega?`)) {
        await api.delete(`delivers/${deliver.id}`);

        const newDeliverList = delivers.filter(
          (deliverParam) => deliverParam.id !== deliver.id
        );

        setDelivers(newDeliverList);

        toast.success(`Entrega apagada com sucesso!`);
      }
    } catch (error) {
      toast.error(
        `Erro ao deletar entrega, verifique os dados ou tente novamente`
      );
    }
  };

  const handleNewDeliver = () => {
    history.push('/deliversnew');
  };

  return (
    <Container>
      <img src={entrega} alt="entregas" />
      <h1>Entregas</h1>
      <div className="nv">
        <input id="myInput" placeholder="Busca" onChange={searchFunction} />
        <button type="button" onClick={handleNewDeliver}>
          Cadastrar nova Entrega
        </button>
      </div>

      <div className="tabela">
        <table border="1" border-color="#243e6a" cellpadding="3" id="myTable">
          <tr class="header">
            <th>Data de Entrega</th>
            <th>Funcionário</th>
            <th>Mat. SIG</th>
            <th>EPI</th>
            <th>Nº do CA</th>
            <th>Quantidade</th>
            <th>Editar/Apagar</th>
          </tr>

          {delivers.map((deliver) => (
            <tr key={deliver.id}>
              <td>{deliver.date_delivery_formated}</td>
              <td>{deliver.name_user}</td>
              <td>{deliver.registration_user}</td>
              <td>{deliver.name_epi}</td>
              <td>{deliver.numberca_epi}</td>
              <td>{deliver.amount_epi}</td>
              <td>
                <Link
                  to={{
                    pathname: `/delivers/${deliver.id}`,
                    state: { deliverLocated: deliver },
                  }}
                >
                  <MdModeEdit color="#243e6a" size={30} />
                </Link>
                <button type="button" onClick={() => handleDelete(deliver)}>
                  <MdDeleteForever color="#243e6a" size={30} />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="back">
        <Link to="/modules">
          <img src={voltar} alt="voltar" />
        </Link>
      </div>
    </Container>
  );
}
