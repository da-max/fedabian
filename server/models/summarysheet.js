'use strict'
module.exports = (sequelize, DataTypes) => {
  const SummarySheet = sequelize.define(
    'SummarySheet',
    {
      name: DataTypes.STRING,
      path: DataTypes.STRING,
      slug: DataTypes.STRING
    },
    {}
  )
  SummarySheet.associate = function(models) {
    SummarySheet.belongsTo(models.Theme, { foreignKey: 'themeId' })
  }
  return SummarySheet
}
