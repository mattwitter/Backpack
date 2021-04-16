const assessment = (connection, Sequelize, users) => {
    return connection.define('assessmentTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
        userID: {
            type: Sequelize.INTEGER,
            references: {
                model: users,
                key: 'id'
            }
        },
        classID: { type: Sequelize.INTEGER }, //from class table
        assessmentName: { type: Sequelize.STRING },
        assessmentType: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },


    }, { paranoid: true })
}

module.exports = assessment