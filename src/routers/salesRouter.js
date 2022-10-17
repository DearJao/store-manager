const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.get('/sales', salesController.listSales);

router.post('/sales', salesController.addSales);

module.exports = router;