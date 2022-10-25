const camelize = require('camelize');
const connection = require('./db/connections');

const allSales = async () => {
  console.log('oii');
  const [result] = await connection.execute(
  `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
  ON sp.sale_id = s.id
  ORDER BY sp.sale_id, sp.product_id;`,
  );
  console.log(result);
  return camelize(result);
};

const findSalesById = async (id) => {
  const [result] = await connection.execute(
  `SELECT date, product_id, quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
  ON sp.sale_id = s.id
  WHERE sp.sale_id = ?;`,
    [id],
  );
  console.log(camelize(result));
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