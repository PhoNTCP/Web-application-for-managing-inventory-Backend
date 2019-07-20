const express = require('express');
const db = require('../util/db.config');
// define variable
const sequelize = db.sequelize;
const product = db.product;
const route = express.Router();

// get product with id
route.get('/find/all', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  const products = await product.findAll();
  res.json(products);
});

module.exports = route;
