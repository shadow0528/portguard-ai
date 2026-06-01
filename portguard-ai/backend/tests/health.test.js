const request = require('supertest');
const { app } = require('../src/server');

describe('API Health Check', () => {
  it('should return 200 OK for /api/health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('OK');
  });
});
