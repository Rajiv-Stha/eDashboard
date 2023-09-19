const userModel = require("../models/userModel");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  const newUser = await userModel.create(req.body);
  res.status(200).json({ message: newUser, success: true });
});
module.exports = router;
