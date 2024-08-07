const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { Task } = require("../models");

// Middleware pour vérifier le token JWT et définir l'utilisateur dans la requête
const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (err) {
    res.status(401).send({ message: "Unauthorized!" });
  }
};

// Middleware pour vérifier si l'user est admin
const isAdmin = (req, res, next) => {
  if (req.userRole !== "admin") {
    return res.status(403).send({ message: "Require Admin Role!" });
  }
  next();
};

// Middleware pour vérifier si l'user est l'auteur du taches ou admin
const isUserOrAdmin = async (req, res, next) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) {
    return res.status(404).send({ message: "Task not found!" });
  }

  if (req.userRole === "admin" || task.Pid_person === req.userId) {
    next();
  } else {
    res.status(403).send({ message: "Require Admin or Task Owner Role!" });
  }
};

module.exports = { authenticate, isAdmin, isUserOrAdmin };
