const gradebook = (connection, Sequelize, assignments, users) => {
    return connection.define(
        'gradebookTables',
        {
            userId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: users, key: 'id' } },
            assignmentId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: assignments, key: 'id' } },
            assignmentGrade: { type: Sequelize.INTEGER }
        },
        { paranoid: true }
    )
}

module.exports = gradebook