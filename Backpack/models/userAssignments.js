

const userAssignments = (connection, Sequelize, assignments, users) => {
    return connection.define(
        'userAssignments',
        {
            assignmentId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: assignments, key: 'id' } },
            userId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: users, key: 'id' } },

        },
        { paranoid: true }
    )
}

module.exports = userAssignments