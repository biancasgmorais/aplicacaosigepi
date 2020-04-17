import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';
import capacete from '~/assets/capacete.png';
import voltar from '~/assets/botaovoltar1.png';

import searchFunction from './searchFunction';

export default function Listepis() {
  const [epis, setEpis] = useState([]);

  useEffect(() => {
    const loadEpis = async () => {
      const response = await api.get(`epis`);

      const EpisFormated = response.data.map((epiLocated) => ({
        ...epiLocated,
        date_validate: epiLocated.date_validate,
        date_validate_formated: format(
          parseISO(epiLocated.date_validate),
          "dd'/'MM'/'yyyy",
          {
            locale: pt,
          }
        ),
      }));
      setEpis(EpisFormated);
    };

    loadEpis();
  }, []);

  const handleDelete = async (epi) => {
    try {
      if (window.confirm(`Confirma a exclusão do epi?`)) {
        await api.delete(`epis/${epi.id}`);

        const newEpiList = epis.filter((epiParam) => epiParam.id !== epi.id);

        setEpis(newEpiList);

        toast.success(`EPI apagado com sucesso!`);
      }
    } catch (error) {
      toast.error(`Erro ao deletar EPI, verifique os dados ou tente novamente`);
    }
  };

  const handleNewEpi = () => {
    history.push('/episnew');
  };

  return (
    <Container>
      <img src={capacete} alt="epis" />
      <h1>EPI's</h1>

      <div className="nv">
        <input id="myInput" placeholder="Busca" onChange={searchFunction} />
        <button type="button" onClick={handleNewEpi}>
          Cadastrar novo EPI
        </button>
      </div>

      <div className="tabela">
        <table border="1" border-color="#243e6a" cellpadding="3" id="myTable">
          <tr class="header">
            <th>EPI</th>
            <th>Validade</th>
            <th>Descrição do EPI</th>
            <th>Nº do CA</th>
            <th>Quantidade</th>
            <th>Editar/Apagar</th>
          </tr>

          {epis.map((epi) => (
            <tr key={epi.id}>
              <td>{epi.epi}</td>
              <td>{epi.date_validate_formated}</td>
              <td>{epi.description}</td>
              <td>{epi.numberca}</td>
              <td>{epi.amount}</td>
              <td>
                <Link
                  to={{
                    pathname: `/epis/${epi.id}`,
                    state: { epiLocated: epi },
                  }}
                >
                  <MdModeEdit color="#243e6a" size={30} />
                </Link>
                <button type="button" onClick={() => handleDelete(epi)}>
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
