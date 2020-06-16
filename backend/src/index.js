const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://lucas:Cagado88@cluster0-xguoi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(3333);

