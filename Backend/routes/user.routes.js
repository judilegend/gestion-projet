const express = require("express");
const router = express.Router();
const users = require("../controllers/user.controller.js");
const { authenticate, isAdmin } = require("../middleware/auth.middleware.js");

// CRUD User routes
router.post("/", [authenticate, isAdmin], users.create);
router.get("/", [authenticate, isAdmin], users.findAll);
router.get("/:id", [authenticate, isAdmin], users.findOne);
router.put("/:id", [authenticate, isAdmin], users.update);
router.delete("/:id", [authenticate, isAdmin], users.delete);

module.exports = router;
