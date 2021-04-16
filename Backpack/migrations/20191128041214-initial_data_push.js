'use strict';
const bcrypt = require('bcryptjs')
module.exports = {


  up: async (queryInterface, Sequelize) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("password", salt);
    // Store hash in your password DB.
    await queryInterface.bulkInsert('users', [
      { firstName: 'John', lastName: 'Smith', Role: 'Teacher', emailAddress: 'JohnSmith@sjcme.edu', password: hash },
      { firstName: 'Mary', lastName: 'Smith', Role: 'Admin', emailAddress: 'MarySmith@sjcme.edu', password: hash },
      { firstName: 'Colin', lastName: 'Frey', Role: 'Student', emailAddress: 'ColinFrey@sjcme.edu', password: hash }
    ])
    await queryInterface.bulkInsert('attendanceTables',
      [
        {
          userId: 2, classId: 2, daysAbsent: 2, daysAttended: 2
        },
        {
          userId: 1, classId: 3, daysAbsent: 10, daysAttended: 3
        }
      ])

    return queryInterface.bulkInsert('classTables', [
      { courseName: 'Javascript', schedule: 'Mon/Fri 9AM-12PM', },
      { courseName: 'SQL', schedule: 'Tues/Thurs 9AM-12PM', }
    ])

    /*return queryInterface.bulkInsert('studentSchedules', [
      {
        userId: Sequelize.literal('(select id from users where role like "student")'),
        courseId: 1
      },
    ])*/
  },


  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('users', null, {})
    await queryInterface.bulkDelete('classTables')
  }
}
