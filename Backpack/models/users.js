const users = (connection, Sequelize) => {
    return connection.define('users', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        role: { type: Sequelize.STRING },
        emailAddress: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING },
    })
}


module.exports = users