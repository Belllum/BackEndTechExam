const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6704663",
  password: "TJvwrnFcFW",
  database: "sql6704663",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180; // Convert degrees to radians
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

const getTreasure = async (req, res) => {
  const { latitude, longitude, distance } = req.query;
  // To make the inputs required
  console.log(latitude, longitude, distance);
  if (
    !latitude ||
    !longitude ||
    !distance ||
    (distance !== "1" && distance !== "10")
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }
  // Query to find treasure boxes with in the distance
  let query = `SELECT * FROM treasures WHERE SQRT(POW(69.1 * (latitude - ${latitude}), 2) + POW(69.1 * (${longitude} - longitude) * COS(latitude / 57.3), 2)) < ${distance}`;

  db.query(query, (err, result) => {
    if (err) throw err;

    if (result.length === 0) {
      return res.status(404).json({ error: "No treasure found" });
    }
    res.json(result);
  });
};

const getPrize = async (req, res) => {
  const { latitude, longitude, distance, prize_value } = req.query;

  if (
    !latitude ||
    !longitude ||
    !distance ||
    (distance !== "1" && distance !== "10") ||
    isNaN(prize_value) ||
    prize_value < 10 ||
    prize_value > 30 ||
    !Number.isInteger(Number(prize_value))
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const distanceInMiles = parseFloat(distance);

  const query = `
    SELECT treasures.*, money_value.amt
    FROM treasures
    JOIN money_value ON treasures.id = money_value.treasure_id
    WHERE SQRT(POW(69.1 * (treasures.latitude - ${latitude}), 2) + POW(69.1 * (${longitude} - treasures.longitude) * COS(treasures.latitude / 57.3), 2)) < ${distanceInMiles}
    AND money_value.amt >= ${prize_value}
    ORDER BY money_value.amt ASC
    LIMIT 1
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "No treasure found" });
    }

    const minTreasure = result[0];
    res.json(minTreasure);
  });
};

const getClosestTreasure = async (req, res) => {
  let { latitude, longitude } = req.query;
  const sql = "SELECT * FROM treasures";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const treasures = [];

    for (let i = 0; i < result.length; i++) {
      const treasure = result[i];
      const dbLat = treasure.latitude;
      const dbLon = treasure.longitude;

      const distance = calculateDistance(latitude, longitude, dbLat, dbLon);
      console.log(
        `The distance between you and treasure id.${
          treasure.id
        } is ${distance.toFixed(2)} kilometers.`
      );
      treasure.distanceKm = distance;
      treasures.push(treasure);
    }

    let minDistance = Number.POSITIVE_INFINITY;
    let closestTreasure = null;

    for (let i = 0; i < treasures.length; i++) {
      if (treasures[i].distanceKm < minDistance) {
        minDistance = treasures[i].distanceKm;
        closestTreasure = treasures[i];
      }
    }
    console.log("The closest treasure is treasure id:", closestTreasure.id);
    res.json(closestTreasure);
  });
};

module.exports = {
  getTreasure,
  getPrize,
  getClosestTreasure,
};
