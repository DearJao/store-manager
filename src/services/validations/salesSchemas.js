const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const salesObj = Joi.object({
  productId: idSchema.label('productId'),
  quantity: idSchema.label('quantity'),
});

const salesSchema = Joi.array().items(salesObj);

module.exports = {
  salesSchema,
};