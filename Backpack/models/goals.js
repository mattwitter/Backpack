const goals = (connection, Sequelize, users) => {
    return connection.define('goalsTable', {
        userID: {
            type: Sequelize.INTEGER,
            references: {
                model: users,
                key: 'id'
            }
        }, //somehow pulled in from userTable
        classId: { type: Sequelize.INTEGER }, //from class table
        assignmentName: { type: Sequelize.STRING },
        assignmentType: { type: Sequelize.STRING },
        dueDate: { type: Sequelize.INTEGER },
        description: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = goals