const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const scenario = req.query.scenario || '200';

  if (scenario === '500') {
    return res.status(500).json(require('./mocks/users/get-users-500.json'));
  }

  if (scenario === '404') {
    return res.status(404).json(require('./mocks/users/get-users-404.json'));
  }

  res.status(200).json(require('./mocks/users/get-users-200.json'));
});

app.listen(3000, () => console.log('Mock rodando na porta 3000'));