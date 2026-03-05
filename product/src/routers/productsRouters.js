const express = require("express");
const router = express.Router();
const {
  listAllProducts,
  addProduct,
  filterByPrice,
} = require("../controllers/productsController");

router.get("/home", (req, res) => {
  res.render("home");
});

router.post("/insertProduct", addProduct);

router.get("/list", listAllProducts);

router.get("/list/:price", filterByPrice);

module.exports = router;
