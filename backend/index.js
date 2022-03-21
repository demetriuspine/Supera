const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3333;

app.get('/', (_req, res) => {
  res.status(200).json({message: 'Informe o CPF pelo body'});
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!`));