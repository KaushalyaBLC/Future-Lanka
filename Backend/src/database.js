const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "bwtzqcmyvlh6mnm9pvjo-mysql.services.clever-cloud.com",
  user: "uptspqyo6yqcbgpw",
  password: "1VzhshojVwATrQnGQsvu",
  database: "bwtzqcmyvlh6mnm9pvjo",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Route to view data from the user table
app.get("/api/viewUsers", (req, res) => {
  const sql = "SELECT * FROM user";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving data from user table: ", err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
      return;
    }
    res.json({ success: true, data: results });
  });
});

// Route to view data from the report table
app.get("/api/viewReports", (req, res) => {
  const sql = "SELECT * FROM report";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving data from report table: ", err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
      return;
    }
    res.json({ success: true, data: results });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
