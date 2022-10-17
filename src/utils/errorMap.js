const errorMap = {
  'any.required': 400,
  'number.min': 400,
  PRODUCT_NOT_FOUND: 404,
  'string.min': 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
};