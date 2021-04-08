const express = require("express");
const router = express.Router();
const { read } = require("../controllers/userController");
const {
  requireSignin,
  authMiddleware,
} = require("../controllers/authControllers");

router.get("/profile", requireSignin, authMiddleware, read);

module.exports = router;
