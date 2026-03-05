const { boolean } = require("drizzle-orm/gel-core");
const {
  insertProduct,
  listProduct,
  filterProduct,
} = require("../models/productsModel");

const paginationFun = require("../utils/pagination");

const listAllProducts = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      const products = await listProduct();
      paginationFun(products)(req, res, () => {
        res.json(res.paginationFun);
      });
    } else {
      const list = {};
      list.result = await listProduct();
      res.json(list.result);
    }
  } catch (err) {
    console.log("Error in listAllProduct");
    res.status(500).send("Error");
  }
};

const addProduct = async (req, res) => {
  try {
    await insertProduct(req.body);
    res.send("<h1>Successfully Product Added..!</h1>");
  } catch (err) {
    console.log("Error in addProduct Function..");
    res.status(500).send("Error in Add Products..!");
  }
};

const filterByPrice = async (req, res) => {
  try {
    const filter_product = await filterProduct(req.params.price);
    res.json(filter_product);
  } catch (err) {
    console.log("Error in filterProduct Function..");
    res.status(500).send("Error in Filter Products By Price..!");
  }
};

module.exports = { listAllProducts, addProduct, filterByPrice };
