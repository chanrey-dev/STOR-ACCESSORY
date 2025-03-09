const mysql = require("mysql2");

// Directly define database credentials
const pool = mysql.createPool({
  host: "localhost", // Change this if needed
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "stor_accessory", // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
