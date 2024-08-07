const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("express-async-errors");
const { JWT_SECRET } = process.env;
const { User } = db;

// Generer token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });
};
console.log(generateToken);

// Etablir une connexion
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("User not found");

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) throw new Error("Invalid Password!");

    const token = generateToken(user);
    console.log(token);

    res.status(200).json({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      accessToken: token,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "An error occurred during login." });
  }
};

// Registre user
const register = async (req, res) => {
  const { name, lastname, email, password, role } = req.body;

  if (!name || !lastname || !email || !password)
    throw new Error("Content cannot be empty!");

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error("Email already in use!");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      lastname,
      email,
      password: hashedPassword,
      role,
    });

    const token = generateToken(user);
    res.status(201).json({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "An error occurred during registration.",
    });
  }
};

module.exports = { login, register };
