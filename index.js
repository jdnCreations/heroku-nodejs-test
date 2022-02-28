const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send({ message: 'hit endpoint' });
});

app.listen(PORT, () => {
  console.log(`listing on port: ${PORT}`);
});
