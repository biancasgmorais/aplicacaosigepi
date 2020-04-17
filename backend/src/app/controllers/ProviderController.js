import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'registration'],
    });
    return res.json(providers);
  }
}

export default new ProviderController();
