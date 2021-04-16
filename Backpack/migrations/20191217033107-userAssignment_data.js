'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('userAssignments', [
      { userId: 1, assignmentId: 1 },
      { userId: 1, assignmentId: 2 },
      { userId: 1, assignmentId: 3 },
      { userId: 1, assignmentId: 4 },
      { userId: 1, assignmentId: 5 },
      { userId: 1, assignmentId: 6 },
      { userId: 1, assignmentId: 7 },
      { userId: 1, assignmentId: 8 },
      { userId: 1, assignmentId: 9 },
      { userId: 2, assignmentId: 1 },
      { userId: 2, assignmentId: 2 },
      { userId: 2, assignmentId: 3 },
      { userId: 2, assignmentId: 4 },
      { userId: 2, assignmentId: 5 },
      { userId: 2, assignmentId: 6 },
      { userId: 2, assignmentId: 7 },
      { userId: 2, assignmentId: 8 },
      { userId: 3, assignmentId: 1 },
      { userId: 3, assignmentId: 2 },
      { userId: 3, assignmentId: 3 },
      { userId: 3, assignmentId: 4 },
      { userId: 3, assignmentId: 5 },
      { userId: 3, assignmentId: 6 },
      { userId: 3, assignmentId: 7 },
      { userId: 3, assignmentId: 9 },
      { userId: 3, assignmentId: 10 },
      { userId: 3, assignmentId: 11 },
      { userId: 3, assignmentId: 12 },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userAssignments')
  }
};
