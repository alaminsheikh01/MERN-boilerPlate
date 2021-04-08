const User = require("../models/user");

exports.read = (req, res) => {
  res.send({ message: "hello" });
};
