const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.get('/sales', salesController.listSales);

router.get('/sales/:id', salesController.listSalesById);

router.post('/sales', salesController.addSales);

module.exports = router;