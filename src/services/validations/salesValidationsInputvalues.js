const { idSchema, productNameSchema, productNameLenghtSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_ID', message: '"id" must be a number' };
  
  return { type: null, message: '' };
};

const validateProduct = (name) => {
  const { error } = productNameSchema.validate(name);
  if (error) return { type: 'BAD_REQUEST', message: '"name" is required' };

  return { type: null, message: '' };
};

const validateProductName = (name) => {
  const { error } = productNameLenghtSchema.validate(name);
  if (error) {
    return {
      type: 'UNPROCESSABLE_ENTITY',
      message: '"name" length must be at least 5 characters long',
    }; 
  }
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateProduct,
  validateProductName,
};