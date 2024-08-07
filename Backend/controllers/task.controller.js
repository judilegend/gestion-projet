const { Task } = require("../models");

// Creer un tache (Admin seulement)
const create = async (req, res) => {
  if (req.userRole !== "admin") {
    return res.status(403).send({ message: "Require Admin Role!" });
  }

  if (!req.body.name || !req.body.description) {
    return res.status(400).send({ message: "Content cannot be empty!" });
  }

  try {
    const task = { ...req.body, Pid_person: req.body.Pid_person };
    const data = await Task.create(task);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).send({ message: err.message || "Error creating Task." });
  }
};

// FInd all taches for BD (Admin and taches owner)
const findAll = async (req, res) => {
  try {
    const tasks =
      req.userRole === "admin"
        ? await Task.findAll()
        : await Task.findAll({ where: { Pid_person: req.userId } });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).send({ message: err.message || "Error retrieving tasks." });
  }
};

// Modifier taches (Admin and task owner)
const update = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task || (req.userRole !== "admin" && task.Pid_person !== req.userId)) {
      return res
        .status(403)
        .send({ message: "Not authorized to update this task!" });
    }
    const [updated] = await Task.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedTask = await Task.findByPk(req.params.id);
      res.status(200).json(updatedTask);
    } else {
      res.status(404).send({ message: "Task not found!" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message || "Error updating Task." });
  }
};

// Delete Task (Admin only)
const deleteTask = async (req, res) => {
  if (req.userRole !== "admin") {
    return res.status(403).send({ message: "Require Admin Role!" });
  }
  try {
    const num = await Task.destroy({ where: { id: req.params.id } });
    if (num === 1) {
      res.status(200).send({ message: "Task was deleted successfully!" });
    } else {
      res.status(404).send({ message: "Task not found!" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message || "Error deleting Task." });
  }
};

module.exports = { create, findAll, update, deleteTask };
