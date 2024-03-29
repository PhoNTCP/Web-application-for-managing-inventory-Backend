const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import model
db.product = require('../model/product.js')(sequelize, Sequelize);
db.branch = require('../model/branch.js')(sequelize, Sequelize);
db.collect_product = require('../model/collect_product.js')(sequelize, Sequelize);
module.exports = db;
