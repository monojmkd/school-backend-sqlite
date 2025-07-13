const express = require("express");
const Classroom = require("../models/Classroom");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const classrooms = await Classroom.findAll();
    if (classrooms.length === 0) {
      return res.status(200).json({ message: "No classrooms found" });
    }
    res.json({ classrooms });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving data", error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const classroom = await Classroom.findOne({ where: { id: req.params.id } });
    if (!classroom) return res.status(404).json({ error: "Not found" });
    res.json({ classroom });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving data", error: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const classroom = await Classroom.create(req.body);
    res.status(201).json(classroom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const classroom = await Classroom.findOne({ where: { id: req.params.id } });
    if (!classroom) return res.status(404).json({ error: "Not found" });
    await classroom.update(req.body);
    res.json(classroom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const classroom = await Classroom.findOne({ where: { id: req.params.id } });
    if (!classroom) return res.status(404).json({ error: "Not found" });
    await classroom.destroy();
    res.json({ message: "Classroom deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
