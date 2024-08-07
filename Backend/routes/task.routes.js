const express = require("express");
const router = express.Router();
const tasks = require("../controllers/task.controller.js");
const {
  authenticate,
  isAdmin,
  isUserOrAdmin,
} = require("../middleware/auth.middleware.js");

// CRUD Task routes
router.post("/", [authenticate, isAdmin], tasks.create);
router.get("/", [authenticate], tasks.findAll);
router.put("/:id", [authenticate, isUserOrAdmin], tasks.update);
router.delete("/:id", [authenticate, isAdmin], tasks.deleteTask);

module.exports = router;
