const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool,
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and initialize all models
db.User = require("./user.model.js")(sequelize, Sequelize);
db.Task = require("./task.model.js")(sequelize, Sequelize);

// Define relationships if any
db.User.hasMany(db.Task, { foreignKey: "Pid_person" });
db.Task.belongsTo(db.User, { foreignKey: "Pid_person" });

module.exports = db;
