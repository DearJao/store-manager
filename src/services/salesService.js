const { salesModel } = require('../models');
const { productsModel } = require('../models');

const verifySalesDb = async (id) => {
  const product = await productsModel.findById(id);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const addSales = async (sales) => {
  const salesData = sales.map((sale) => verifySalesDb(sale.productId));

  const resolvedPromisse = await Promise.all(salesData);
  const someResult = resolvedPromisse.some((product) => product.type);

  if (someResult) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const saleId = await salesModel.insert();

  const promisseSales = sales.map((sale) =>
    salesModel.addSalesProducts(saleId, sale.productId, sale.quantity));

  await Promise.all(promisseSales);

  return { type: null, message: { id: saleId, itemsSold: sales } };
};

const getAllSales = async () => {
  const sales = salesModel.allSales();
  return { type: null, message: sales };
};

const getAllSalesById = async (id) => {
  const error = verifySalesDb(id);

  if (error.type) return error;

  const sales = await salesModel.findSalesById(id);

  return { type: null, message: sales };
};

module.exports = {
  addSales,
  getAllSales,
  getAllSalesById,
};