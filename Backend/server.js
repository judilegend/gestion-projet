const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models");

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
const userRoutes = require("./routes/user.routes");
const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./routes/auth.routes");
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

// Start server and sync database
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await db.sequelize.sync();
    console.log("Database synced");
  } catch (error) {
    console.error("Unable to sync database:", error);
  }
});
