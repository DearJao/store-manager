// const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('../models/db/connections');

const allProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManger.products',
  );
  return result;
};

const findById = async (productsId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManger.products WHERE id = ? ORDER BY id ASC',
    [id],
  );
  return result;
};

module.exports = {
  allProducts,
  findById
};