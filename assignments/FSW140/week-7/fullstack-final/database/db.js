const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("capstone_project", "root", "mac5470", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db;
