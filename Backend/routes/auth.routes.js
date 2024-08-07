const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller.js");

// User login
router.post("/login", auth.login);

// User registration
router.post("/register", auth.register);

module.exports = router;
