const { Sequelize } = require("sequelize");

exports.db = new Sequelize("pos", "root", "root", {
   host: "localhost",
   dialect: "mysql",
});
