const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", async (req, res) => {
  const newProject = new Project(req.body);
  const saved = await newProject.save();
  res.json(saved);
});

module.exports = router;
