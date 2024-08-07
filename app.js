// app.js

const express = require('express');
const { connectToDatabase } = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiCaResultsRoutes = require('./routes/apiCaResults');
const apiClassCategoryRoutes = require("./routes/apiClassCategorys")

const app = express();
const port = 3000;

app.use(express.json());

// Middleware
app.use(cors({
    origin: `http://localhost:${port}` ,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'x-api-key']
}));
app.use(bodyParser.json());

 //const apiKeyAuth = require('./middleware/apiKeyAuth');
// app.use(apiKeyAuth); // Apply the API key middleware to all routes

// Connect to the database
connectToDatabase();


// // Routes

app.use("/api", apiCaResultsRoutes)
app.use("/api", apiClassCategoryRoutes)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const apiCaResultsRoutes = require('./routes/apiCaResults');
// const apiClassCategoryRoutes = require("./routes/apiClassCategorys")

// //const apiKeyAuth = require('./middleware/apiKeyAuth');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:3310',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'x-api-key']
// }));
// app.use(bodyParser.json());
// // app.use(apiKeyAuth); // Apply the API key middleware to all routes

// // Routes

// app.use("/api", apiCaResultsRoutes)
// app.use("/api", apiClassCategoryRoutes)

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });