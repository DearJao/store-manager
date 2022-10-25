const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { saleCreateResponse } = require('../../integration/controller/mocks/salesController');

describe('testes unitarios da camada controller de vendas', () => {
  beforeEach(sinon.restore);
  it('testa se a função de recuperar os vendas', async () => {
    const req = {};
    const res = {};
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "getAllSales")
      .resolves({ type: null, message: [saleCreateResponse] });

    await salesController.listSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([saleCreateResponse]);
  });

  it('testa a função recuperar vendas pelo id', async () => {
    const req = { params: { id: 3 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns([saleCreateResponse]);
    sinon
      .stub(salesService, "getAllSalesById")
      .resolves({ type: null, message: [saleCreateResponse] });

    await salesController.listSalesById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json).to.have.been.calledWith([saleCreateResponse]);
  });

  it('testa a função adicionar vendas', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns([saleCreateResponse]);
    sinon
      .stub(salesService, "addSales")
      .resolves({ type: null, message: [saleCreateResponse] });
    
    await salesController.addSales(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith([saleCreateResponse]);
  });
});