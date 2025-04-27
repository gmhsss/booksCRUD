const express = require('express');
const cors = require('cors');
const livroRoutes = require('./routes/livroRoutes'); 

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Uso do express.json() em vez do body-parser
app.use('/api', livroRoutes);

module.exports = app;
