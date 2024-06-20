const request = require('supertest');
const app = require('../src/index'); // Adjust the path as needed

describe('GET /', () => {
  it('should render the index page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(500);
    expect(response.headers['content-type']).toMatch(/html/);
  });
});
