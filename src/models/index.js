const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://username:password@localhost:5432/tododb');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Todo = require('./todo')(sequelize, Sequelize);

module.exports = db;
