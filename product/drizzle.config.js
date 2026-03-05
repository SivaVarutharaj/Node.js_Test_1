const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    user: "postgres",
    password: "siva004",
    database: "Lingam_Store",
    host: "localhost",
    port: 5432,
    ssl: false,
  },
});
