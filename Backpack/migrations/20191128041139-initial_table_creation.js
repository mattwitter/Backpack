'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
      },
      firstName: { type: Sequelize.STRING, },
      lastName: { type: Sequelize.STRING, },
      role: { type: Sequelize.STRING, },
      emailAddress: { type: Sequelize.STRING, },
      password: { type: Sequelize.STRING, },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('courseCatalog', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
      courseDescription: { type: Sequelize.STRING },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },

    })

    await queryInterface.createTable('classTables', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      schedule: { type: Sequelize.STRING },
      courseName: { type: Sequelize.STRING },
      semester: { type: Sequelize.STRING },
      spotsAvailable: { type: Sequelize.INTEGER },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('assignmentsTables', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      assignmentName: { type: Sequelize.STRING },
      assignmentType: { type: Sequelize.STRING },
      dueDate: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('attendanceTables', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
      userId: { type: Sequelize.INTEGER },
      classId: { type: Sequelize.INTEGER }, //from class table
      daysAbsent: { type: Sequelize.INTEGER },
      daysAttended: { type: Sequelize.INTEGER },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('gradebookTables', {
      userId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'users', key: 'id' } },
      assignmentId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'assignments', key: 'id' } },
      assignmentGrade: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })


    await queryInterface.createTable('assessmentTables', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { type: Sequelize.INTEGER },//somehow pulled in from userTable
      classId: { type: Sequelize.INTEGER }, //from class table
      assessmentName: { type: Sequelize.STRING },
      assessmentType: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('studentSchedules', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' } },
      courseId: { type: Sequelize.INTEGER, },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },

    })

    await queryInterface.createTable('usersClasses', {
      userId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'users', key: 'id' } },
      classId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'classTables', key: 'id' } },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('usersGradebook', {
      gradeId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'gradebook', key: 'id' } },
      userId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'users', key: 'id' } },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('usersAttendance', {
      userId: { type: Sequelize.INTEGER, reference: { model: 'users', key: 'id' } },
      classId: { type: Sequelize.INTEGER, reference: { model: 'usersAttendance', key: 'id' } },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE }
    })

    return queryInterface.createTable('goalsTable', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { type: Sequelize.INTEGER },//somehow pulled in from userTable
      classId: { type: Sequelize.INTEGER }, //from class table
      assignmentName: { type: Sequelize.STRING },
      assignmentType: { type: Sequelize.STRING },
      dueDate: { type: Sequelize.DATEONLY() },
      description: { type: Sequelize.STRING },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
    await queryInterface.dropTable('courseCatalog')
    await queryInterface.dropTable('classTables')
    await queryInterface.dropTable('assignmentsTables')
    await queryInterface.dropTable('gradebookTables')
    await queryInterface.dropTable('assessmentTables')
    await queryInterface.dropTable('studentSchedules')
    await queryInterface.dropTable('usersClasses')
    await queryInterface.dropTable('usersGradebook')
    return queryInterface.dropTable('goalsTable')
  }
}
