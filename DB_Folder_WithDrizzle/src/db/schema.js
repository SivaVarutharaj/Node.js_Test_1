const { sqliteTable, text, integer, uniqueIndex } = require("drizzle-orm/sqlite-core");

const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    firstName: text("first_name"),
    lastName: text("last_name"),
    email: text("email").notNull(),
  },
  (table) => [
    uniqueIndex("email_idx").on(table.email),
  ]
);

module.exports = { users };