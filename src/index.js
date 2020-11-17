const express = require('express');
const cors = require('cors');
require('dotenv').config({  
  path: '.env'
});
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);