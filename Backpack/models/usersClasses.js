const usersClasses = (connection, Sequelize, classTables, users) => {
    return connection.define('usersClasses', {
        classId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: classTables, key: 'id' } },
        userId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: users, key: 'id' } }
    }, { paranoid: true })
}

module.exports = usersClasses