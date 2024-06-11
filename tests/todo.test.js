const request = require('supertest');
const app = require('../src/index');

describe('Todo API', () => {
  it('should list all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  it('should get a todo by id', async () => {
    const res = await request(app).get('/todos/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should create a new todo', async () => {
    const res = await request(app).post('/todos').send({ title: 'Test Todo' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Todo');
  });

  it('should delete a todo', async () => {
    const res = await request(app).delete('/todos/1');
    expect(res.statusCode).toEqual(204);
  });
});
