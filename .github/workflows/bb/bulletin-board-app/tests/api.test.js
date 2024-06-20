// const helloworld = require('../src/helloworld');

// test('prints correct greeting with first name', () => {
//   const consoleSpy = jest.spyOn(console, 'log');
//   helloworld();
//   expect(consoleSpy).toHaveBeenCalledWith('Hello Andrew Jayasinghe');
// });

const request = require('supertest');
const app = require('../src/api');

describe('GET /events', () => {
  it('should return all events', async () => {
    const response = await request(app).get('/events');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      { id: 1, title: 'Docker Workshop', detail: 'Linuxing in London ', date: '2017-11-21' },
      { id: 2, title: 'WinOps #17', detail: 'WinOps London', date: '2017-11-21' },
      { id: 3, title: 'Docker London', date: '2017-11-13' }
    ]);
  });
});

describe('GET /events/:eventId', () => {
  it('should return a single event', async () => {
    const response = await request(app).get('/events/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ id: 1, title: 'Docker Workshop', detail: 'Linuxing in London ', date: '2017-11-21' });
  });

  it('should return 404 if event not found', async () => {
    const response = await request(app).get('/events/999');
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe('Event not found');
  });
});

