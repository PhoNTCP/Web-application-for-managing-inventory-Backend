const express = require('express');
const app = express();
const port = 8000;
// set use body json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// add route
const productRoute = require('./routes/product');
app.use('/api/product', productRoute);
const branchRoute = require('./routes/branch');
app.use('/api/branch', branchRoute);
const collect_productRoute = require('./routes/collect_product');
app.use('/api/collect_product', collect_productRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
