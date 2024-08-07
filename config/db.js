
const sql = require('mssql');
const config = require('../config/dbConfig.json');

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to the database successfully!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

module.exports = {
  sql,
  connectToDatabase
};
//for mysql2
/* const mysql = require('mysql2');

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


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

module.exports = connection;
 */