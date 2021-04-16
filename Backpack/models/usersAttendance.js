const usersAttendance = (connection, Sequelize) => {
    return connection.define('attendanceTable', {
        classId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'classTables', key: 'id' } },
        userId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'users', key: 'id' } },
        daysAbsent: { type: Sequelize.INTEGER },
        daysAttended: { type: Sequelize.INTEGER },
    }, { paranoid: true })
}

module.exports = usersAttendance