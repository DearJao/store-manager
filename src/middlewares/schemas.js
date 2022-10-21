const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const salesObj = Joi.object().keys({
  productId: idSchema.label('productId'),
  quantity: idSchema.label('quantity'),
}).required();

const salesSchema = Joi.array().items(salesObj);

module.exports = {
  salesSchema,
};