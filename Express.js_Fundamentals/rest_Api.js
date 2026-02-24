const express = require("express");
const bodyPhares = require("body-parser");

const app = express();

app.use(bodyPhares.json());

var store =[];

app.get
("/", (req, res) => 
    {
        res.send
        (
            '<h1>Welcome Home..!</h1> <br> <form action="/storeview" method="post"><label>Book Name :</label><input type="text" name="bookName"/><br/><label>Author Name :</label><input type="text" name="authorName"/><br/><label>Category :</label><input type="text" name="category"/><br/><label>Price :</label><input type="text" name="price"/><br/><input type="submit" value="SUBMIT"/></form>'
        );
    }
);

app.post('/storeview',(req,res)=>
    {
       //let body = req.body;
        //store.push(body);
        res.send(store); 
    }
);

app.put('/addbooks',(req,res)=>
{
    let body = req.body;
    if(body.authorName=="" || body.authorName==undefined)
    {
        return res.send('pls Enter Author Name');
    }
    if(body.bookName==""||body.bookName==undefined)
    {
       return res.send('pls Enter bookName');
    }
    if(body.category==""||body.category==undefined)
    {
       return res.send('pls Enter category');
    }
    if(body.price==""||body.price==undefined)
    {
       return  res.send('pls Enter price');
    }
    else 
    {
        store.push(body);
        res.send('Successfully Book Added');
    }
    
});

app.get('/view',(req,res)=>{
   
    // const {bookName,price,category,authorName} = req.query;
    const {authorName} = req.query;
  //  const {bookName}=req.query;
    // const {author,book}=req.query
    
    // console.log(req.query);
    //console.log(req.url);
     
    
    const findAuthor = store.find((book)=>book.authorName==authorName);
   // const findBook = store.find((book)=>book.bookName==bookName);
   // const twoQuery = store.find((books)=>books.bookName==book && books.authorName ==author);
   // const findPrice = store.find((book)=>book.price==price);
   // const findCategory = store.find((book)=>book.category==category);
    
    if(req.url=='/view') return res.send(store);

    // if(findAuthor==undefined || findBook==undefined || findPrice==undefined || findCategory==undefined)
    // {
    //     res.send('Please Verify The Query');
    // }
    if(findAuthor==undefined)return res.send('Please Verify The AuthorName');
    if(findAuthor.authorName==authorName ) return res.send(findAuthor);
    
    // if(findBook==undefined)return res.send('Please Verify The BookName');
   // if(findBook.bookName==authorName)return res.send(findBook);

   // if(findAuthor==undefined || findBook==undefined)return res.send('Please Verify The Query');
   // if(findAuthor==" " && findBook==" ")return res.send(twoQuery);

   // if(findPrice.price==authorName) return res.send(findPrice);
   // if(findCategory.category==authorName) return res.send(findCategory);
    
});

app.get('/view/:category',(req,res)=>{
    
    const cato = req.params.category;

    const findCato = store.find((book)=> book.category==cato);

    res.send(findCato);
    
});


app.delete('/deletebook/:category',(req,res)=>
{
    const deletecato = req.params.category;

    store = store.filter((book)=> book.category != deletecato);

    res.send('Successfully Book Deleted..');
});


app.listen(3000, () => {
  console.log("Server is Running");
});
