const courseCatalog = (connection, Sequelize) => {
  return connection.define(
    'courseCatalog',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      courseDescription: { type: Sequelize.STRING }
    },
    { freezeTableName: true },
    { paranoid: true }
  )
}

module.exports = courseCatalog
