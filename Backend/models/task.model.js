module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["à faire", "en cours", "terminé"],
        defaultValue: "à faire",
      },
      Pid_person: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users", // Name of the related table
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false, // Disable Sequelize automatic timestamp columns
      underscored: true, // Use snake_case columns
    }
  );

  return Task;
};
