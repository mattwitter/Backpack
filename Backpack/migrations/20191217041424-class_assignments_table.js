'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('classAssignments', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      classId: { type: Sequelize.INTEGER, reference: { model: 'classTables', key: 'id' } },
      assignmentId: { type: Sequelize.INTEGER, reference: { model: 'assignments', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('classAssignments')
  }
};