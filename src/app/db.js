const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'control_inventarios',
  port: 3306,
  password: '',
});

module.exports = connection;