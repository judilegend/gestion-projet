const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const validateUserInput = ({ name, lastname, email, password }) => {
  if (!name || !lastname || !email || !password) {
    throw new Error("Content cannot be empty!");
  }
};
const hashPassword = async (password) => {
  console.log("Hashing password..."); // Improved log message
  try {
    if (!password) {
      throw new Error("Password is required");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed successfully");
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    return undefined;
  }
};
// Creer et Save new User
const create = async (req, res) => {
  try {
    validateUserInput(req.body);
    const { name, lastname, email, password, role } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      lastname,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};

// Find All User (admin only)
const findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving users.",
    });
  }
};

const update = async (req, res) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    const [updated] = await User.update(
      { ...req.body, password: hashedPassword },
      { where: { id: req.params.id } }
    );

    if (!updated) {
      return res.status(404).json({
        message: `Cannot update User with id=${req.params.id}. Maybe User was not found or req.body is empty!`,
      });
    }
    res.status(200).json({ message: "User was updated successfully." });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Error updating User with id " + req.params.id,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const num = await User.destroy({ where: { id: req.params.id } });

    if (num === 1) {
      res.status(200).json({ message: "User was deleted successfully!" });
    } else {
      res.status(404).json({
        message: `Cannot delete User with id=${req.params.id}. Maybe User was not found!`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "Could not delete User with id " + req.params.id,
    });
  }
};

module.exports = { create, findAll, update, delete: deleteUser };
