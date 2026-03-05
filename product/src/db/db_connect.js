const pg = require("pg");
const { drizzle } = require("drizzle-orm/node-postgres");

const client = new pg.Client({
  user: "postgres",
  password: "siva004",
  database: "Lingam_Store",
  host: "localhost",
  port: 5432,
  ssl: false,
});

client
  .connect()
  .then(console.log("Database Successfully Connected..!"))
  .catch((err) => {
    console.log("Database Not Connected..! Pls Check it..");
  });

const db = drizzle(client);

module.exports = db;
