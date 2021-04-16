const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Red to go..!')
});

app.listen(port, () => {
  console.log(`Red to go on port ${port}!`)
});
