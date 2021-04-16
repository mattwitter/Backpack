const attendance = (connection, Sequelize) => {
    return connection.define('attendanceTable', {
        userID: { type: Sequelize.INTEGER }, //somehow pulled in from userTable
        classId: { type: Sequelize.INTEGER }, //from class table
        daysAbsent: { type: Sequelize.INTEGER },
        daysAttended: { type: Sequelize.INTEGER },
    }, { paranoid: true })
}

module.exports = attendance