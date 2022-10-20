const camelize = require('camelize');
const connection = require('./db/connections');

const allSales = async () => {
  const [result] = await connection.execute(
  `SELECT sale_id, date, product_id, quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
  ON sp.sale_id = s.id;`,
  );
  return camelize(result);
};

const findSalesById = async (id) => {
  const [[result]] = await connection.execute(
  `SELECT date, product_id, quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
  ON sp.sale_id = s.id
  WHERE sp.sale_id = ?;`,
    [id],
  );
  return camelize(result);
};

const insert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return insertId;
};

const addSalesProducts = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [saleId, productId, quantity],
  );
};

// FUNÇÃO BUSCA NO BANCO
// const verifySales = async (id) => {
//   const [[result]] = await connection.execute(
//     'SELECT * FROM StoreManager.products WHERE id = ?;',
//     [id],
//   );
//   return result;
// };

module.exports = {
  allSales,
  findSalesById,
  addSalesProducts,
  insert,
};