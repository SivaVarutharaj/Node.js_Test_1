const { integer, pgTable, varchar } = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar("first_name", { length: 50 }).notNull(),
  lastName: varchar("last_name", { length: 50 }).notNull(),
  age: integer("age").notNull(),
  phone: varchar("phone", { length: 20 }).notNull().unique(),
  email: varchar("email", { length: 50 }).notNull().unique(),
});

module.exports = { users }; // flower braket is must bcz drizzle access the datas..
