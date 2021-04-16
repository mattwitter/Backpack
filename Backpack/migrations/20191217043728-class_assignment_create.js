'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('classAssignments', [
      { classId: 1, assignmentId: 1 },
      { classId: 1, assignmentId: 2 },
      { classId: 1, assignmentId: 3 },
      { classId: 1, assignmentId: 4 },
      { classId: 1, assignmentId: 5 },
      { classId: 1, assignmentId: 6 },
      { classId: 1, assignmentId: 7 },
      { classId: 1, assignmentId: 8 },
      { classId: 1, assignmentId: 9 },
      { classId: 2, assignmentId: 1 },
      { classId: 2, assignmentId: 2 },
      { classId: 2, assignmentId: 3 },
      { classId: 2, assignmentId: 4 },
      { classId: 2, assignmentId: 5 },
      { classId: 2, assignmentId: 6 },
      { classId: 2, assignmentId: 7 },
      { classId: 2, assignmentId: 8 },
      { classId: 1, assignmentId: 10 },
      { classId: 1, assignmentId: 11 },
      { classId: 1, assignmentId: 12 },
      { classId: 2, assignmentId: 10 },
      { classId: 2, assignmentId: 11 },
      { classId: 2, assignmentId: 12 },
      { classId: 2, assignmentId: 9 },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('classAssignments')
  }
};
