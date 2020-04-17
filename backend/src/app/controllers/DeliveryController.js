import * as Yup from 'yup';

import Epis from '../models/Epis';
import Deliver from '../models/Deliver';
import User from '../models/User';

class DeliveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      date_delivery: Yup.date().required(),
      numberca_epi: Yup.number().required(),
      amount_epi: Yup.number().required(),
      registration_user: Yup.number().required(),
      password_user: Yup.string()
        .required()
        .min(6),
    });

    // checar se os dados são validos
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Cadastro de entrega falhou.' });
    }

    const { password_user, amount_epi } = req.body;
    const userDeliver = await User.findOne({
      where: { registration: req.body.registration_user },
    });

    // Checa se o usuário existe no banco
    if (!userDeliver) {
      return res
        .status(401)
        .json({ error: 'A matricula do usuário não existente.' });
    }
    // checa se a senha bate
    if (!(await userDeliver.checkPassword(password_user))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const epis_check = await Epis.findOne({
      where: { numberca: req.body.numberca_epi },
    });

    // chega se o número do CA digitado está no banco dos EPIS
    if (!epis_check) {
      return res.status(400).json({ error: 'Número de CA não encontrado' });
    }
    // checa se a quantidade digitada não ultrapassa a quantidade do banco de EPIS
    if (amount_epi > epis_check.amount) {
      return res.status(400).json({ error: 'Quantidade não valida.' });
    }

    // verificando se nao está ultrapassando a quantidade do
    // banco junto com os cadastros anteriores
    const check_amount = await Deliver.findAll({
      where: { numberca_epi: req.body.numberca_epi },
    });

    var amount2 = 0;
    var amount1 = 0;

    if (check_amount) {
      for (var i = 0; i < check_amount.length; i++) {
        amount2 += check_amount[i].amount_epi;

        if (amount2 > epis_check.amount) {
          return res
            .status(400)
            .json({ error: 'Estoque totalmente emprestado.' });
        }
      }
    }

    amount1 = amount2 + amount_epi;

    if (amount1 > epis_check.amount) {
      return res.status(400).json({ error: 'Quantidade acima do estoque.' });
    }

    const { epi: name_epi } = epis_check;
    const { name: name_user } = userDeliver;

    const { id } = await Deliver.create({
      ...req.body,
      name_epi,
      name_user,
    });

    return res.json(id);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      date_delivery: Yup.date().required(),
      numberca_epi: Yup.number().required(),
      amount_epi: Yup.number(),
      registration_user: Yup.number(),
    });

    // checar se os dados são validos
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Atualização de entrega falhou.' });
    }
    const { id, amount_epi } = req.body;

    const userDeliver = await User.findOne({
      where: { registration: req.body.registration_user },
    });

    // Checa se o usuário existe no banco
    if (!userDeliver) {
      return res
        .status(401)
        .json({ error: 'A matricula do usuário não existe.' });
    }

    const epis_check = await Epis.findOne({
      where: { numberca: req.body.numberca_epi },
    });
    // chega se o número do CA digitado está no banco dos EPIS
    if (!epis_check) {
      return res.status(400).json({ error: 'Número de CA não encontrado' });
    }
    // checa se a quantidade digitada não ultrapassa a quantidade do banco de EPIS
    if (amount_epi > epis_check.amount) {
      return res.status(400).json({ error: 'Quantidade não valida.' });
    }

    const deliver = await Deliver.findByPk(id);

    const { epi: name_epi } = epis_check;
    const { name: name_user } = userDeliver;

    const updateDeliver = await deliver.update({
      ...req.body,
      name_epi,
      name_user,
    });

    return res.json(updateDeliver);
  }

  async delete(req, res) {
    const { deliverId } = req.params;
    const delivers = await Deliver.findByPk(deliverId);
    await delivers.destroy();

    return res.json();
  }

  async index(req, res) {
    const delivers = await Deliver.findAll({
      attributes: [
        'id',
        'date_delivery',
        'name_epi',
        'numberca_epi',
        'amount_epi',
        'registration_user',
        'name_user',
      ],
    });

    return res.json(delivers);
  }
}
export default new DeliveryController();
