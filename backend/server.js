const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/systemRating", {useNewUrlParser: true});


app.listen(3003);