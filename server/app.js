require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000;
const routes = require('./routes')

mongoose.connect('mongodb://localhost/hacktivoverflow', { useNewUrlParser: true });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running in port ${port}...`)
});