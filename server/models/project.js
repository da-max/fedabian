'use strict'
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'Project',
    {
      title: DataTypes.STRING,
      repository: DataTypes.STRING,
      demo: DataTypes.STRING,
      description: DataTypes.STRING,
      imageLink: DataTypes.STRING
    },
    {}
  )
  Project.associate = function(models) {
    // associations can be defined here
  }
  return Project
}
