'use strict';
const bcrypt = require('bcryptjs')
module.exports = {

  up: (queryInterface, Sequelize) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("password", salt);
    return queryInterface.bulkInsert('users', [
      { firstName: 'Peter', lastName: 'Allain', Role: 'Student', emailAddress: 'pallain@sjcme.edu', password: hash },
      { firstName: 'Megan', lastName: 'McSheffrey', Role: 'Student', emailAddress: 'mmcsheffrey@sjcme.edu', password: hash },
      { firstName: 'Ozzie', lastName: 'Osbourne', Role: 'Student', emailAddress: 'oosbourne@sjcme.edu', password: hash }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.bulkDelete('users', null, {})
  }
};
