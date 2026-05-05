const axios = require('axios');

const baseURL = 'http://localhost:3000';

describe('GET /users', () => {

  test('deve retornar 200', async () => {
    const response = await axios.get(`${baseURL}/users?scenario=200`);

    expect(response.status).toBe(200);
    expect(response.data[0]).toHaveProperty('nome');
  });

  test('deve retornar 500', async () => {
    try {
      await axios.get(`${baseURL}/users?scenario=500`);
    } catch (error) {
      expect(error.response.status).toBe(500);
    }
  });

  test('deve retornar 404', async () => {
    try {
      await axios.get(`${baseURL}/users?scenario=404`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });

});