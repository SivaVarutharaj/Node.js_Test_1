const { products } = require("../db/schema/productsSchema");
const db = require("../db/db_connect");
const { eq } = require("drizzle-orm");

const insertProduct = async ({
  product_name,
  price,
  category,
  brand,
  sub_category,
}) => {
  return await db
    .insert(products)
    .values({ product_name, price, category, brand, sub_category });
};

const listProduct = async () => {
  return await db.select().from(products);
};

const filterProduct = async (price) => {
  return await db.select().from(products).where(eq(products.price, price));
};

module.exports = { insertProduct, listProduct, filterProduct };
