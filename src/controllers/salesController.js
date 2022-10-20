const { salesService } = require('../services');
const { mapError } = require('../utils/errorMap');

const listSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();

  if (type) return res.status(mapError((type)).json({ message }));

  res.status(200).json(message);
};

const listSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getAllSalesById(+id);

  if (type) return res.status(mapError((type))).json({ message });

  res.status(200).json(message);
};

const addSales = async (req, res) => {
  const { type, message } = await salesService.addSales(req.body);

  if (type) return res.status(mapError((type))).json({ message });

  // console.log(message);
  res.status(201).json(message);
};

module.exports = {
  listSales,
  listSalesById,
  addSales,
};