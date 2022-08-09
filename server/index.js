require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000
const router = require('./routes.js');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use('/liftmeup', router);

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});
