const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  CANT_ADD_PRODUCT: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};