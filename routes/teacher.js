const express = require("express");
const Teacher = require("../models/Teacher");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    if (teachers.length === 0) {
      return res.status(200).json({ message: "No teachers found" });
    }
    res.json({ teachers });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving data", error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ where: { id: req.params.id } });
    if (!teacher) return res.status(404).json({ error: "Not found" });
    res.json({ teacher });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving data", error: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ where: { id: req.params.id } });
    if (!teacher) return res.status(404).json({ error: "Not found" });
    await teacher.update(req.body);
    res.json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ where: { id: req.params.id } });
    if (!teacher) return res.status(404).json({ error: "Not found" });
    await teacher.destroy();
    res.json({ message: "Teacher deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
