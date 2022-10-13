const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/products', productsController.listProducts);

router.get('/products/:id', productsController.listProductsById);

module.exports = router;