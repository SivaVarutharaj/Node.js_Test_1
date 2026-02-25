const express = require("express");
const Database = require("better-sqlite3");
const { drizzle } = require("drizzle-orm/better-sqlite3");

const app = express();

// Create SQLite DB file
const sqlite = new Database("demo_db_main.db");

// Connect drizzle
const db = drizzle(sqlite);

console.log("Database Connected ");

app.listen(3000, () => {
  console.log("Server is Running on port 3000 ");
});