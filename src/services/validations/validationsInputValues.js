const { idSchema, productSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_ID', message: '"id" must be a number' };
  
  return { type: null, message: '' };
};

const validateProduct = (name) => {
  const { error } = productSchema.validate(name);
  if (error) return { type: 'INVALID_PRODUCT', message: '"name" must exist' };

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateProduct,
};