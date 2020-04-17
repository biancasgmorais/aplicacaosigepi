import Sequelize, { Model } from 'sequelize';

class Deliver extends Model {
  static init(sequelize) {
    super.init(
      {
        date_delivery: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Epis, { foreignKey: 'name_epi', as: 'epi' });
    this.belongsTo(models.Epis, { foreignKey: 'numberca_epi', as: 'numberca' });
    this.belongsTo(models.Epis, { foreignKey: 'amount_epi', as: 'amount' });
    this.belongsTo(models.User, {
      foreignKey: 'registration_user',
      as: 'registration',
    });
    this.belongsTo(models.User, { foreignKey: 'name_user', as: 'name' });
  }
}
export default Deliver;
