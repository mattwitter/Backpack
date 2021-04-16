const classTables = (connection, Sequelize) => {
  return connection.define(
    'classTables',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      courseName: { type: Sequelize.STRING },
      schedule: { type: Sequelize.STRING },
      semester: { type: Sequelize.STRING },
      spotsAvailable: { type: Sequelize.INTEGER },
    },
    { paranoid: true }
  )
}

module.exports = classTables
