import * as Yup from 'yup';
import Epis from '../models/Epis';

class EpisController {
  // CADASTRAR EPIS
  async store(req, res) {
    const schema = Yup.object().shape({
      epi: Yup.string().required(),
      description: Yup.string().required(),
      numberca: Yup.number().required(),
      amount: Yup.number().required(),
      date_validate: Yup.date().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const epiExists = await Epis.findOne({
      where: { numberca: req.body.numberca },
    });
    if (epiExists) {
      return res.status(400).json({ error: 'Epi já existente.' });
    }

    const {
      id,
      epi,
      description,
      numberca,
      amount,
      date_validate,
    } = await Epis.create(req.body);

    return res.json({
      id,
      epi,
      description,
      numberca,
      amount,
      date_validate,
    });
  }

  async update(req, res) {
    // Atualizar dados do EPI
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      epi: Yup.string(),
      description: Yup.string(),
      numberca: Yup.number().required(),
      amount: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Atualização falhou.' });
    }

    const epis = await Epis.findOne({
      where: { numberca: req.body.numberca },
    });

    if (!epis) {
      return res.status(400).json({ error: 'Epi n existente' });
    }

    const { id } = req.body;
    const epiUpdate = await Epis.findByPk(id);

    const {
      epi,
      numberca,
      description,
      amount,
      date_validate,
    } = await epiUpdate.update(req.body);

    return res.json({
      id,
      epi,
      description,
      numberca,
      amount,
      date_validate,
    });
  }

  async index(req, res) {
    const allepis = await Epis.findAll({
      attributes: [
        'id',
        'epi',
        'numberca',
        'description',
        'amount',
        'date_validate',
      ],
    });

    return res.json(allepis);
  }

  async delete(req, res) {
    const { epiId } = req.params;
    const epis = await Epis.findByPk(epiId);
    await epis.destroy();

    return res.json('Epi excluido com sucesso');
  }
}

export default new EpisController();
