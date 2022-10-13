const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/products', productsController.listProducts);

router.get('/products/:id', productsController.listProductsById);

router.post('/products', productsController.addProducts);

module.exports = router;