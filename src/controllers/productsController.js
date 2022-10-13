const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  // const { products } = req.body;
  const { type, message } = await productsService.getAllProducts();

  if (type) return res.status(errorMap.mapError((type)).json({ message }));

  res.status(200).json(message);
};

const listProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById(+id);

  if (type) return res.status(errorMap.mapError((type))).json({ message });

  res.status(200).json(message);
};

const addProducts = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const { type, message } = await productsService.addNewProduct(name);

  if (type) return res.status(errorMap.mapError((type))).json({ message });

  res.status(201).json(message);
};

module.exports = {
  listProducts,
  listProductsById,
  addProducts,
};