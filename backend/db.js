const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "L@thik@2006",   // change this
  database: "testdb"
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Connection Failed");
  } else {
    console.log("✅ DB Connected");
  }
});

module.exports = db;