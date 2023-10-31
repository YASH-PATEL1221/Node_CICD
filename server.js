const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello, World! this is change');
});

app.get('/home', (req, res) => {
  console.log('agsf');
  res.send('this is another change asd');
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
