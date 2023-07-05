const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("get all tasks ");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.json({ err });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update single task");
};
const deleteTask = (req, res) => {
  res.send("deleted single task");
};

module.exports = { getAllTasks, createTask, updateTask, getTask, deleteTask };
