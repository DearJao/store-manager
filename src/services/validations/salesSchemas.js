const Joi = require('joi');

const salesProductsSchema = Joi.number().integer().min(1).required();

const salesQuantitySchema = Joi.object({ name: Joi.string().min(5).required() });

const salesIdSchema = Joi.object({ name: Joi.string().min(5).required() });

module.exports = {
  salesProductsSchema,
  salesQuantitySchema,
  salesIdSchema,
};