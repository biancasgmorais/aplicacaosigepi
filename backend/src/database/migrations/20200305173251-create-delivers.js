module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('delivers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date_delivery: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      name_epi: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      numberca_epi: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      amount_epi: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      registration_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name_user: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('delivers');
  },
};
