const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/db/connections');
const { products } = require('../../integration/models/mocks/productsModelMock');

describe('Testes de unidade da camada model de produtos', async function () {
  afterEach(sinon.restore);

  it('Recupera todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.allProducts();
    expect(result).to.be.deep.equal(products);
  });

  it('Recuperando produto pelo seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModel.findById(1);
    expect(result).to.be.deep.equal(products[0]);
  });
});