const express = require('express');
const productsRoutes = require('./productsRouter');

const routes = express.Router();

routes.use(producstRoutes);

module.exports = routes;