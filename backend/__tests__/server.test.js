const request = require('supertest');
const app = require('../server');

jest.mock('node:os', () => ({
  ...jest.requireActual('node:os'),
  cpus: jest.fn(() => [{}, {}, {}]),
  loadavg: jest.fn(() => [1.5]),
}));

describe('GET /api/cpu-load-average', () => {
  it('should return the mocked CPU load average and date', async () => {
    const response = await request(app).get('/api/cpu-load-average');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('load');
    expect(response.body).toHaveProperty('date');

    const expectedLoad = ((1.5 / 3) * 100).toFixed(2);
    expect(response.body.load).toBe(expectedLoad);

    expect(typeof response.body.date).toBe('string');
  });
});
