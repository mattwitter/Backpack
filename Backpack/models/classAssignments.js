const classAssignments = (connection, Sequelize, assignments, classTables) => {
    return connection.define(
        'classAsignments',
        {
            assignmentId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: assignments, key: 'id' } },
            classId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: classTables, key: 'id' } },

        },
        { paranoid: true }
    )
}

module.exports = classAssignments