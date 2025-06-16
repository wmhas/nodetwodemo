const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('index.js - Hello from Node.js on Cloud Run!');
});

app.listen(port, () => {
  console.log(`twodemo app listening on port ${port}`);
});