'use strict'
module.exports = (sequelize, DataTypes) => {
  const Theme = sequelize.define(
    'Theme',
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING
    },
    {}
  )
  Theme.associate = function(models) {}
  return Theme
}
