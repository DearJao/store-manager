const { idSchema, productNameSchema } = require('./productsSchemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) {
    return {
        type: error.details[0].type,
        message: '"id" must be a number',
    }; 
  }
  return { type: null, message: '' };
};

const validateProduct = (name) => {
  const { error } = productNameSchema.validate(name);
  if (error) {
    return {
        type: error.details[0].type,
        message: error.message,
    }; 
  }
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateProduct,
};