const express = require('express');
const app = express();

// Routes 
const foodRoutes = require('./routes/foodRoutes');

app.get('/echo', (req, res) => {
    res.send('Recived Echo!');
});

app.use(foodRoutes);

module.exports = app;