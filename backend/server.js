const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/hope-angels", {useNewUrlParser: true, useUnifiedTopology: true});


require('./src/models/Users');
require('./src/models/Categories');
require('./src/models/Ongs');
require('./src/models/Cases');

app.use('/api',require('./src/routes'));

app.listen(3003);