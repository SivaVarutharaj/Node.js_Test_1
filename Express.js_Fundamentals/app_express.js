const express = require('express');
const bodyParser = require('body-parser');

// create server with Express:
const app = express();

// 'use' property is a middleware.
// If you use middleware you should do next() method compulsory.
app.use((req,res,next)=>
    {
        console.log("First Middleware");
        next();
    }
);

app.use(bodyParser.urlencoded()) 

// '/' is a route 
app.get('/',(req,res)=>
{
    res.send('<form action="/user" method="post"><label>Name :</label><input type="text" name="Name"/><br><label>Password :</label><input type="password" name="Password"/><br><input type="submit" value="SUBMIT"/></form>');
});

//Request And Response And Status Code And Error Handling
app.post('/user',(req,res)=>
{   
    
    console.log(req.body);
    
    var {Name,Password} = req.body;

    console.log(Name);
    

    if(Name=="" || Name==undefined)
    {
        res.status(400).send("Please Enter Proper UserName");
    }
        else if(Password=="" || Password==undefined)
        {
            res.status(400).send("Please Enter Proper Password");
        }
    else
    {
         res.send('<h1> Hello Node.js Express</h1>');
    }
   
});

app.listen(3000,()=>console.log("Server is Created"));