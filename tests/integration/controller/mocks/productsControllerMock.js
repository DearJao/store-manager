const productsList = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const idList = {
  type: null,
  message: 
    {
      id: 1,
      name: "Martelo de Thor",
    },
};

const idNotFound = {
  type: "PRODUCT_NOT_FOUND",
  message: "Product not found",
};

const newProduct = {
  type: null,
  message:
    {
      id: 4,
      name: "Batarangue",
    },
};

module.exports = {
  productsList,
  idList,
  idNotFound,
  newProduct,
};