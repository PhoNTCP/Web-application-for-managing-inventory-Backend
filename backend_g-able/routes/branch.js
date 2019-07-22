const express = require('express');
const db = require('../util/db.config');
// define variable
const sequelize = db.sequelize;
const branch = db.branch;
const route = express.Router();

// get branch with id
route.get('/find/all', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  const branchs = await branch.findAll();
  res.json(branchs);
});

module.exports = route;
