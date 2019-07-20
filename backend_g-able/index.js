// import express & define port = 3000
const express = require('express');
const app = express();
const port = 8000;
// set use body json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// add route
const productRoute = require('./routes/product');
app.use('/product', productRoute);
// set port & run server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
