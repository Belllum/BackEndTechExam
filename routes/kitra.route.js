const express = require("express");
const router = express.Router();
const {
  getTreasure,
  getPrize,
  getClosestTreasure,
} = require("../controllers/kitra.controller");

router.get("/kitra", getTreasure);

router.get("/kitra/prize", getPrize);

router.get("/treasure", getClosestTreasure);

module.exports = router;
