const usersGradebook = (connection, Sequelize, gradebook, users) => {
    return connection.define('usersGradebook', {
        gradeId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: gradebook, key: 'id' } },
        userId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: users, key: 'id' } }
    }, { paranoid: true })
}

module.exports = usersGradebook