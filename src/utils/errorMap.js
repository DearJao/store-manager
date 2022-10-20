const errorMap = {
  'any.required': 400,
  SALE_NOT_FOUND: 404,
  PRODUCT_NOT_FOUND: 404,
  'number.min': 422,
  'string.min': 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
};