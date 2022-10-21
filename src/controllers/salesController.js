const { salesService } = require('../services');
const { salesValidate } = require('../middlewares/validateSale');
const { mapError } = require('../utils/errorMap');

const addSales = async (req, res) => {
  const isValid = salesValidate(req.body);
  if (isValid.type) {
    return res.status(mapError((isValid.type))).json({ message: isValid.message });
  }
  const { type, message } = await salesService.addSales(req.body);

  if (type) return res.status(mapError((type))).json({ message });

  res.status(201).json(message);
};

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

module.exports = {
  listSales,
  listSalesById,
  addSales,
};