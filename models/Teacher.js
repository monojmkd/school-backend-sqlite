let { DataTypes, sequelize } = require("../config/database");

const Teacher = sequelize.define("Teacher", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allow: false,
    unique: true,
  },
});

module.exports = Teacher;
