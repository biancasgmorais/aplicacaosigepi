import Sequelize, { Model } from 'sequelize';

class Epis extends Model {
  static init(sequelize) {
    super.init(
      {
        epi: Sequelize.STRING,
        description: Sequelize.STRING,
        numberca: Sequelize.INTEGER,
        amount: Sequelize.INTEGER,
        date_validate: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Epis;
