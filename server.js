const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! this is change');
});

app.get('/home', (req, res) => {
  console.log('ags');
  res.send('this is another change asd');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});