const userModel = require("../models/userModel");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  const newUser = await userModel.create(req.body);
  console.log(newUser);
  console.log(newUser._doc);
  const { password, ...other } = newUser._doc;
  console.log(other);
  res.status(200).json({ message: other, success: true });
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    if (req.body.password && req.body.email) {
      const user = await userModel.findOne(req.body).select("-password");
      if (user) {
        res.status(200).json({ message: user });
      } else {
        res.status(404).json({ message: "no user found" });
      }
    } else {
      res.status(404).json({ message: "no user found" });
    }
  } catch (error) {
    res.status(403).json({ message: error });
  }
});

module.exports = router;
