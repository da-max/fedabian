'use strict'
module.exports = (sequelize, DataTypes) => {
  const SummarySheet = sequelize.define(
    'SummarySheet',
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      slug: DataTypes.STRING
    },
    {}
  )
  SummarySheet.associate = function(models) {
    SummarySheet.hasOne(models.Theme, { foreignKey: 'themeId', as: 'theme' })
  }
  return SummarySheet
}
