

const defConfig = {
        out: "./drizzle",
        schema:"./src/db/schema.js",
        dialect: "sqlite",
        dbCredentials : {
            url :  "./demo_db_main.db",
        } 
    }

module.exports = defConfig;
