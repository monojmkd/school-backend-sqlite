let { DataTypes, sequelize } = require("../config/database");
const Classroom = require("./Classroom");

const Student = sequelize.define("Student", {
  name: {
    type: DataTypes.STRING,
    allow: false,
  },
  email: {
    type: DataTypes.STRING,
    allow: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allow: false,
  },
  classroomId: {
    type: DataTypes.NUMBER,
  },
});

Student.belongsTo(Classroom, { foreignKey: "classroomId" });
Classroom.hasMany(Student, { foreignKey: "classroomId" });

module.exports = Student;
