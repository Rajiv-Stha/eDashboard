const productModel = require("../models/productModel");

const router = require("express").Router();

router.post("/add", async (req, res) => {
  try {
    const newProduct = await productModel.create(req.body);
    console.log(newProduct);
    res.status(200).json({ message: newProduct, success: true });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
