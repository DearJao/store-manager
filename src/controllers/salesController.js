const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const listSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();

  if (type) return res.status(errorMap.mapError((type)).json({ message }));

  res.status(200).json(message);
};

const addSales = async (req, res) => {
  // console.log(req.body);
  const { productId, quantity } = req.body;
  const { type, message } = await salesService.addNewSales(productId, quantity);

  if (type) return res.status(errorMap.mapError((type))).json({ message });

  res.status(201).json(message);
};

module.exports = {
  listSales,
  addSales,
};