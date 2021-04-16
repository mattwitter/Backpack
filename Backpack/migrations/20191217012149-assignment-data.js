'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('assignmentsTables', [
      { assignmentName: "Last Train to Nodeville ", assignmentType: "Homework", dueDate: "8 / 12 / 19", description: "Test", },
      { assignmentName: "Movie API ", assignmentType: "Homework", dueDate: "8 / 12 / 19", description: "Test", },
      { assignmentName: "Baseball Database", assignmentType: "Homework", dueDate: "8 / 12 / 19", description: "Test", },
      { assignmentName: "Round the Bases", assignmentType: "Homework", dueDate: "8 / 12 / 19", description: "Test", },
      { assignmentName: "HTML Site", assignmentType: "Portfolio Site", dueDate: "8 / 12 / 19", description: "Test", },
      { assignmentName: "Attack of the clones", assignmentType: "Homework", dueDate: "8 / 12 / 19", description: "Test", },
      { assignmentName: "Recursive santa clause", assignmentType: "Homework", dueDate: "8 / 12 / 19", description: "Test", },
      { assignmentName: "Price is right", assignmentType: "Homework", dueDate: "8 / 12 / 19", description: "Test", },
      { assignmentName: "Mid Term", assignmentType: "Mid Term", dueDate: "10 / 1 / 2019", description: "Test", },
      { assignmentName: "Order-Book", assignmentType: "Portfolio Site", dueDate: "10 / 1 / 2019", description: "Test", },
      { assignmentName: "Super-hero-api", assignmentType: "Homework", dueDate: "10 / 1 / 2019", description: "Test", },
      { assignmentName: "Final Exam", assignmentType: "Final Exam", dueDate: "10 / 1 / 2019", description: "Test", },
      /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.
    
        Example:
        return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      */
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('assignmentsTables')
  }
}