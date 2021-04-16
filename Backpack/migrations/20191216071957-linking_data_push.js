'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usersClasses', [
      { classId: 1, userId: 1 },
      { classId: 1, userId: 2 },
      { classId: 2, userId: 1 },
      { classId: 2, userId: 2 },
      { classId: 3, userId: 3 },
      { classId: 3, userId: 1 },
    ])
    await queryInterface.bulkInsert('usersAttendance', [
      { classId: 1, userId: 2 },
      { classId: 1, userId: 3 },

    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usersClasses')
    await queryInterface.bulkDelete('usersGradebook')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
