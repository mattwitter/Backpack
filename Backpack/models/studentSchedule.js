const studentScheduleModel = (connection, Sequelize, users) => {
    return connection.define('studentSchedules', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        userId: { type: Sequelize.INTEGER, references: { model: users, key: 'id' } },
        //courseId: { type: Sequelize.INTEGER, references: { model: 'classTables', key: 'courseId' } },

    }, { paranoid: true })
}

module.exports = studentScheduleModel