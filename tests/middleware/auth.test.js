const auth = require('../../src/middleware/auth');

function mockResponse() {
  const res = {};
  res.statusCode = null;
  res.body = null;
  res.status = function (code) {
    this.statusCode = code;
    return this;
  };
  res.json = function (obj) {
    this.body = obj;
    return this;
  };
  return res;
}

function testMissingHeader() {
  const req = { headers: {} };
  const res = mockResponse();
  let nextCalled = false;
  auth(req, res, () => { nextCalled = true; });
  if (res.statusCode !== 401) throw new Error('Expected 401 for missing header');
  if (!res.body || !res.body.error.includes('Missing')) throw new Error('Incorrect error message');
}

function testInvalidFormat() {
  const req = { headers: { authorization: 'BadToken' } };
  const res = mockResponse();
  let nextCalled = false;
  auth(req, res, () => { nextCalled = true; });
  if (res.statusCode !== 401) throw new Error('Expected 401 for invalid format');
}

function testInvalidToken() {
  const req = { headers: { authorization: 'Bearer wrong' } };
  const res = mockResponse();
  let nextCalled = false;
  auth(req, res, () => { nextCalled = true; });
  if (res.statusCode !== 401) throw new Error('Expected 401 for invalid token');
}

function testValidToken() {
  const req = { headers: { authorization: 'Bearer secret-token' } };
  const res = mockResponse();
  let nextCalled = false;
  auth(req, res, () => { nextCalled = true; });
  if (!nextCalled) throw new Error('next() was not called for valid token');
}

testMissingHeader();
testInvalidFormat();
testInvalidToken();
testValidToken();

console.log('All auth middleware tests passed');
