const express = require("express");
const mysql = require("mysql");
const app = express();

let query = `SELECT * FROM treasures WHERE SQRT(POW(69.1 * (latitude - ${latitude}), 2) + POW(69.1 * (${longitude} - longitude) * COS(latitude / 57.3), 2)) < ${distance}`;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "techexam",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});

// app.get("/treasures", (req, res) => {
//   const sql = "SELECT * FROM treasures";

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error("Error executing query:", err);
//       res.status(500).send("Internal Server Error");
//       return;
//     }

//     const Lat = 14.552036595352455;
//     const Lon = 121.01696118771324;
//     const treasures = [];

//     for (let i = 0; i < result.length; i++) {
//       const treasure = result[i];
//       const dbLat = treasure.latitude;
//       const dbLon = treasure.longtitude;

//       const distance = calculateDistance(Lat, Lon, dbLat, dbLon);
//       console.log(
//         `The distance between you and treasure no.${
//           treasure.id
//         } is ${distance.toFixed(2)} kilometers.`
//       );
//       if (distance === 1 || distance === 10) {
//         console.log(
//           `The distance between you and treasure no.${
//             treasure.id
//           } is ${distance.toFixed(2)} kilometers.`
//         );
//       }
//       treasures.push(treasure);
//     }

//     res.json(treasures);
//   });
// });

app.get("/treasures", (req, res) => {
  const { latitude, longitude, distance } = req.query;
  // Validate inputs
  console.log(latitude, longitude, distance);
  if (
    !latitude ||
    !longitude ||
    !distance ||
    (distance !== "1" && distance !== "10")
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }
  // Query to find treasure boxes

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/treasures/value", (req, res) => {
  let { latitude, longitude, distance, prize_value } = req.query;
  // Validate inputs
  if (
    !latitude ||
    !longitude ||
    !distance ||
    (distance !== "1" && distance !== "10")
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }
  // Query to find treasure boxes with prize value in range
  prize_value = Number(prize_value);
  //   console.log(typeof prize_value2, Number.isInteger(prize_value2));
  //   let query = `SELECT * FROM treasures WHERE SQRT(POW(69.1 * (latitude - ${latitude}), 2) + POW(69.1 * (${longitude} - longitude) * COS(latitude / 57.3), 2)) < ${distance}`;
  if (
    prize_value &&
    !isNaN(prize_value) &&
    prize_value >= 10 &&
    prize_value <= 30 &&
    Number.isInteger(prize_value)
  ) {
    query += ` AND id IN (SELECT treasure_id FROM money_value WHERE amt = ${prize_value})`;
  } else {
    return res.status(400).json({ error: "Invalid input" });
  }
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
