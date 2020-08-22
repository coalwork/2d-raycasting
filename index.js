const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, err => {
  if (err) throw err;
  console.log(`App is listening on port ${3000}`);
});
