const { salesSchema } = require('./schemas');

const salesValidate = (sales) => {
  const { error } = salesSchema.validate(sales);
  if (error) {
    return {
        type: error.details[0].type,
        message: error.message,
    };
  }
  return { type: null, message: '' };
};

module.exports = {
  salesValidate,
};