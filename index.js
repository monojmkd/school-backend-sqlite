const express = require("express");
const app = express();
let { sequelize } = require("./config/database");
const data = require("./data.json");
const Student = require("./models/Student");
const Classroom = require("./models/Classroom");
const Teacher = require("./models/Teacher");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await Teacher.bulkCreate(data.teachers, { returning: true });
    await Classroom.bulkCreate(data.classrooms);
    await Student.bulkCreate(data.studentData);
    res.status(200).json({
      message: "Database seeded with Student,Classroom and Teacher data!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error Seeding the data.", error: error.message });
  }
});

app.use("/teachers", require("./routes/teacher"));
app.use("/classrooms", require("./routes/classroom"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
