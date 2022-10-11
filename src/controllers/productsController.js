const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const listProducts = async (req, res) => {
  const { products } = req.body;
  const { type, message } = await productsService.getAllProducts({ products });

  if (type) return res.status(errorMap.mapError((type)).json({ message }));

  res.status(200).json(message);
}

const listProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById({ id });

  if (type) return res.status(errorMap.mapError((type)).json({ message }));

  res.status(200).json(message);
}

module.exports = {
  listProducts,
  listProductsById
}