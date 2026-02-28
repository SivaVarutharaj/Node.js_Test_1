const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./src/db/schema",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "siva004",
    database: "UsersDB",
    ssl: false,
  },
});
