const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();
    if (students.length === 0) {
      return res.status(200).json({ message: "No students found" });
    }
    res.json({ students });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving data", error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ where: { id: req.params.id } });
    if (!student) return res.status(404).json({ error: "Not found" });
    res.json({ student });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving data", error: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const existingStudent = await Student.findOne({
      where: { email: req.body.email },
    });

    if (existingStudent) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ where: { id: req.params.id } });
    if (!student) return res.status(404).json({ error: "Not found" });
    await student.update(req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ where: { id: req.params.id } });
    if (!student) return res.status(404).json({ error: "Not found" });
    await student.destroy();
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
