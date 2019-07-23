const express = require('express');
const db = require('../util/db.config');
// define variable
const sequelize = db.sequelize;
const collect_product = db.collect_product;
const product = db.product;
const branch = db.branch;
const route = express.Router();


/////////// localhost:8000/api/collect_product/find/id/:branch_id
route.get('/find/id/:branch_id', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  branch.hasMany(collect_product, {foreignKey: 'BRANCH_ID'})
  collect_product.belongsTo(branch, {foreignKey: 'BRANCH_ID'})
  product.hasMany(collect_product, {foreignKey: 'PRODUCT_ID'})
  collect_product.belongsTo(product, {foreignKey: 'PRODUCT_ID'})

  const branch_id = req.params.branch_id;
  const collect_products = await collect_product.findAll({
    attributes: ['BRANCH_ID'],
    where: {branch_id: branch_id},
   include : [
     {
       model: branch,
       required: true,
       //attributes: ['BRANCH_NAME'],
     },
     {
       model: product,
       required: true,
       //attributes: ['BRANCH_NAME'],
     }
   ]
 });
 res.json(collect_products);

});

////localhost:8000/api/collect_product/find/all
route.get('/find/all', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  const collect_products = await collect_product.findAll();
  res.json(collect_products);
});
module.exports = route;
