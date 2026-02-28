const { drizzle } = require("drizzle-orm/node-postgres");
const pg = require("pg");

const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "siva004",
  database: "UsersDB",
});

client
  .connect()
  .then(() => console.log("Database Connected Successfully...!"))
  .catch((err) => console.log(err));

const db = drizzle(client);

module.exports = db;
