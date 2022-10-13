const { productsModel } = require('../models');
const { validateId } = require('./validations/validationsInputValues');

const getAllProducts = async () => {
  const products = await productsModel.allProducts();
  return { type: null, message: products };
};

const getProductsById = async (id) => {
  const error = validateId(id);
  if (error.type) return error;

  const product = await productsModel.findById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getProductsById,
};