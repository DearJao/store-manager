const { productsModel } = require('../models');
const {
  validateId,
  validateProduct,
  // validateProductName,
} = require('./validations/ProductsValidationsInputValues');

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

const addNewProduct = async (name) => {
  const error = validateProduct();

  if (error.type) return error;
  console.log('oi');
  const product = await productsModel.addProduct(name);
  console.log('outro oi');
  if (!name) return { type: 'CANT_ADD_PRODUCT', message: 'Format not enabled' };
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getProductsById,
  addNewProduct,
};