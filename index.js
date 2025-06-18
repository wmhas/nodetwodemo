const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config(); // Load environment variables from .env file

app.get('/', (req, res) => {
  res.send(`index.js - Hello from Node.js on Cloud Run! - ${process.env.ENV_VAR}`);
});

app.listen(port, () => {
  console.log(`twodemo app listening on port ${port}`);
});