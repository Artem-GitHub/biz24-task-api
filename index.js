const express = require('express');
const app = express();

const SERVER_PORT = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(SERVER_PORT, () => {
  console.log(`Server was started on port ${SERVER_PORT}...`);
});
