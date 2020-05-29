const db = require("../database/db");
const Sequelize = require("sequelize");

module.exports = db.sequelize.define(
  "post",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: Sequelize.STRING,
    },
    owner: {
      type: Sequelize.INTEGER,
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);
