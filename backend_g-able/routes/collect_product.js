const express = require('express');
const db = require('../util/db.config');
// define variable
const sequelize = db.sequelize;
const collect_product = db.collect_product;
const product = db.product;
const branch = db.branch;
const route = express.Router();

route.get('/find/collect_product', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  branch.hasMany(collect_product, {foreignKey: 'BRANCH_ID'})
  collect_product.belongsTo(branch, {foreignKey: 'BRANCH_ID'})
  // branch.hasMany(collect_product, {foreignKey: 'ID', sourceKey: 'PRODUCT_ID'});
  // collect_product.belongsTo(branch, {foreignKey: 'ID', targetKey: 'PRODUCT_ID'});
  const collect_products = await collect_product.findAll({
    attributes: ['BRANCH_ID'],
   include : [
     {
       model: branch,
       attributes: ['BRANCH_NAME'],
       //required: true,
       // include: [{model: product, required: true }]
     }
   ]
 });
 res.json(collect_products);
  //collect_product.belongsToMany(product);
  // product.belongsToMany(collect_product);
  // collect_product.hasMany(product, {foreignKey: 'PRODUCT_ID', sourceKey: 'ID'});
  // product.belongsTo(collect_product, {foreignKey: 'PRODUCT_ID', targetKey: 'ID'});
  // await collect_product.findAll({
//     include: [
//         {
//             // Do an INNER JOIN to find the blogs that user has access to.
//             attributes: [], // Don't return any data here.
//             model: product,
//         },
//         // {
//         //     // Now perform a 2nd LEFT JOIN to return the same table to return the users.
//         //     model: product
//         // }
//     ]
// });
  // product.belongsToMany(branch, { through: 'collect_product' , foreignKey:'PRODUCT_ID'});
  // branch.belongsToMany(product, { through: 'collect_product' , foreignKey: 'BRANCH_ID'});
  // const collect_products = await collect_product.findAll();
  // res.json(collect_products);

  // const collect_product_id = req.params.branch_id;
  // let collect_products = {};
  // if (collect_product_id) {
  //   collect_products = await collect_product.findById(collect_product_id);
  // }
  // res.json(collect_products);
});


route.get('/find/all', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  const collect_products = await collect_product.findAll();
  res.json(collect_products);
});


// get collect_product All
// route.get('/find/all', async (req, res, next) => {
//   product.belongsToMany(collect_product, {foreignKey: 'ID'})
//   product.belongsToMany(collect_product, {foreignKey: 'ID'})
//   product.belongsTo(product, {foreignKey: 'ID'})
//   Post.find({ where: { ...}, include: [User]})
//
//   console.log('body::==', req.body);
//   console.log('params::==', req.params);
//   const collect_products = await collect_product.findAll();
//   res.json(collect_products);
// });
// get collect_product with id
//route.get('/find/id/:branch_id', async (req, res, next) => {
//   console.log('body::==', req.body);
//   console.log('params::==', req.params);
//   const branch_id = req.params.branch_id;
//   let collect_products = {};
//   if (branch_id) {
//     collect_products = await Blog.findById(blogId);
//   }
//   res.json(blogs);
// });

module.exports = route;
