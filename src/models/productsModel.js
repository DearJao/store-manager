// const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./db/connections');

const allProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ORDER BY id ASC',
    [id],
  );
  return result;
};

const addProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products(name) VALUES(?);',
    [name],
  );
  return {
    id: insertId,
    name,
  };
};

module.exports = {
  allProducts,
  findById,
  addProduct,
};