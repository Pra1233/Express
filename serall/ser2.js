const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false})); //it  will pass body to all middleware


app.use('/addproduct' ,(req,res,next)=>{
res.send('<html> <form action="/product" method="POST"> <input type="text" name="k">  <input type="number" name="size">   <button type="submit">SUBMIT</button>  </form>  </html>');
})

app.post('/product', (req,res)=>{
    console.log(req.body);
    res.redirect('/');   
})

app.use('/',(req,res,next)=>{ //app.use call in get and post both so
res.send(`<h1>Hello<h1>`) ;                   
})

app.listen(3000);


