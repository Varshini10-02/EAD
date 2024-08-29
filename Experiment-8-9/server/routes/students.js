const express = require('express');
const router = express.Router();
const students = require('../models/student.js');

// GET all students
router.get('/', async (req, res) => {
  try {
    const totalstudents = await students.find();
    res.json(totalstudents);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

// GET a specific student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await students.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

// POST a new student
router.post('/', async (req, res) => {
    console.log("post method called")
  const student = new students({
    name: req.body.name,
    rollnumber: req.body.rollnumber,
    section: req.body.section,
  });

  try {
    const a1 = await student.save();
    res.json(a1);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

// PATCH (update) an students's subscription status by ID
router.patch('/:id', async (req, res) => {
  try {
    const student = await students.findById(req.params.id);
    student.section = req.body.section;
    const a1 = await student.save();
    res.json(a1);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

module.exports = router;
