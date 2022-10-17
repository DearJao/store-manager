const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { productsList, idList, newProduct } = require('../../integration/controller/mocks/productsControllerMock');

describe('testes unitarios da camada controller de produtos', () => {
  beforeEach(sinon.restore);
  it('testa se a função de recuperar os produtos', async () => {
    const req = {};
    const res = {};
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "getAllProducts")
      .resolves({ type: null, message: productsList });

    await productsController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsList);
  });

  it('testa a função recuperar produtos pelo id', async () => {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(idList.message);
    sinon
      .stub(productsService, "getProductsById")
      .resolves({ type: null, message: idList.message });

    await productsController.listProductsById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json).to.have.been.calledWith(idList.message);
  });

  it('testa a função adicionar produtos', async () => {
    const req = { body: { name: "Batarangue" } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(newProduct.message);
    sinon
      .stub(productsService, "addNewProduct")
      .resolves({ type: null, message: newProduct });
    
    await productsController.addProducts(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });
});