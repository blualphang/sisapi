const mysql = require('mysql2');

require('dotenv').config();
// const dotenv = require('dotenv');
// // configraration with env. 
// dotenv.config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'ncan',
//     password: '123*Christ',
//     database: "ncanmembership"
// });

// const INFO = process.env.USER ;

//     console.log(`INFO running on  ${INFO}`);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

module.exports = connection;
