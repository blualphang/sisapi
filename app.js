// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiLgaRoutes = require('./routes/apiLga');
const apiStateRoutes = require('./routes/apiState');
const apiCaResultsRoutes = require('./routes/apiCaResults');
const apiClassCategoryRoutes = require("./routes/apiClassCategory")

//const apiKeyAuth = require('./middleware/apiKeyAuth');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3310',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'x-api-key']
}));
app.use(bodyParser.json());
// app.use(apiKeyAuth); // Apply the API key middleware to all routes

// Routes
app.use('/api', apiLgaRoutes);
app.use('/api', apiStateRoutes);
app.use("/api", apiCaResultsRoutes)
app.use("/api", apiClassCategoryRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});