const express=require('express');

const router=express.Router();//mini express

router.get('/addproduct' ,(req,res,next)=>{
res.send('<html> <form action="/product" method="POST"> <input type="text" name="key">  <input type="number" name="size"> <button type="submit">SUBMIT</button>  </form>  </html>');
    })
    
 router.post('/product', (req,res)=>{
        console.log(req.body);
        res.redirect('/');   
    })
module.exports=router; 