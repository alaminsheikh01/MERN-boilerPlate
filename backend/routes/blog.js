const express = require("express");
const router = express.Router();

//define controllers
const { time } = require("../controllers/blogControllers");

//routes
router.get("/", time);

module.exports = router;
