const { pgTable, serial, varchar, integer } = require("drizzle-orm/pg-core");

const products = pgTable("products", {
  product_id: serial("product_id").primaryKey(),
  product_name: varchar("product_name", { length: 50 }).notNull(),
  price: integer("price"),
  brand: varchar("brand", { length: 50 }),
  category: varchar("category", { length: 50 }),
  sub_category: varchar("sub_category", { length: 50 }),
});

module.exports = { products };
