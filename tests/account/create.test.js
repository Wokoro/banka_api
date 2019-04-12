/* eslint-disable no-unused-expressions */
const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const server = require('../../server');
const AccountModel = require('../../src/models/account.model');

chai.use(chaiHttp);
describe('Bank account creation tests: POST /accounts', () => {
  const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ3b2tvcm9zYW11ZWxAeWFob28uY29tIiwiaXNBZG1pbiI6InRydWUiLCJmaXJzdE5hbWUiOiJzYW11ZWwiLCJsYXN0TmFtZSI6ImRvdXllIiwiaWF0IjoxNTU1MDQ4MzkzLCJleHAiOjE1NTUyMjExOTMsImlzcyI6IkF1dGhvcml6YXRpb24vUmVzb3VyY2UvQmFua2FTZXJ2ZXIiLCJzdWIiOiIifQ.S-d7og-kaTFHR3GSlwUzQqs-vJRjCaE_g6PRVE9GGiTeG1-Umqs-8q5dZzH3hq2A1ns0L5-3Iw4r4p6QSLH-iQ';
  describe('tests for successful account creation', () => {
    let res = {};
    after(() => { server.close(); });
    before(async () => {
      const params = {
        status: 'active',
        openingBalance: 23774664,
        type: 'savings',
      };
      res = await chai.request(server).post('/api/v1/accounts').set('Authorization', token).send(params);
    });
    it('Status 200', () => {
      expect(res.body).to.have.status(200);
    });
    it('Response body should be defined', () => {
      expect(res.body).not.to.be.undefined;
    });
    it('Response must contain valid account number', () => {
      expect(res.body.data).to.have.property('accountNumber');
    });
    it('Response must contain valid firstName', () => {
      expect(res.body.data).to.have.property('firstName');
      expect(res.body.data.firstName).to.match(/^([A-Za-z])/);
    });
    it('Response must contain a valid lastName', () => {
      expect(res.body.data).to.have.property('lastName');
      expect(res.body.data.lastName).to.match(/^([A-Za-z])/);
    });
    it('Response must contain a valid email', () => {
      expect(res.body.data).to.have.property('email');
      expect(res.body.data.email).to.match(/^([A-Za-z0-9_\-.])+@([A-Za-z])+\.([A-Za-z])/);
    });
    it('Response must contain account type', () => {
      expect(res.body.data).to.have.property('type');
    });
    it('Response must contain opening balance', () => {
      expect(res.body.data).to.have.property('openingBalance');
    });
    it('Bank account must be created', () => {
      expect(AccountModel.findByAccountNumber(res.body.data.accountNumber)).to.not.be.undefined;
    });
  });
  describe('tests for unsuccessful account creation', () => {
    after(() => { server.close(); });
    let res = {};
    before(async () => {
      const params = {
        password: '',
        openingBalance: '',
        type: '',
      };
      res = await chai.request(server).post('/api/v1/accounts').set('Authorization', token).send(params);
    });
    it('Status 401', () => {
      expect(res.body).to.have.status(401);
    });
    it('Response body should be defined', () => {
      expect(res.body).to.have.property('message');
    });
  });
});
