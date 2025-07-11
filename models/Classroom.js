let { DataTypes, sequelize } = require("../config/database");
const Teacher = require("./Teacher");

const Classroom = sequelize.define("Classroom", {
  name: {
    type: DataTypes.STRING,
    allow: false,
  },
  teacherId: {
    type: DataTypes.NUMBER,
  },
});

// Relationships
Classroom.belongsTo(Teacher, { foreignKey: "teacherId" });
Teacher.hasMany(Classroom, { foreignKey: "teacherId" });

module.exports = Classroom;
