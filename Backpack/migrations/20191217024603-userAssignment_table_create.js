'use strict';

module.exports = {

  /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userAssignments', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { type: Sequelize.INTEGER, reference: { model: 'users', key: 'id' } },
      assignmentId: { type: Sequelize.INTEGER, reference: { model: 'assignments', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userAssignments')
  }
};
