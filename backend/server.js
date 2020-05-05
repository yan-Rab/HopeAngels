const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/systemRating", {useNewUrlParser: true});

require('./src/models/Users');
require('./src/models/Categories');

app.use('/api',require('./src/routes'));

app.listen(3003);