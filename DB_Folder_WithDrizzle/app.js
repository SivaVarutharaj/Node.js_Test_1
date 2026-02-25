const { drizzle } = require('drizzle-orm/libsql') ;
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

/* const db = drizzle(
    { 
        connection: 
            {
                 url: process.env.DATABASE_URL,  
            }
    },console.log("DataBase Connected..!")
    
); */

const users = require('./src/db/schema');

//dotenv.config({path : path.join(__dirname,'config','config.env')})

//app.use(db);

app.listen(3000,()=>console.log("Server is Running"));