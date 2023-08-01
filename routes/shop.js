const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{ //app.use call in get and post both so
    res.send(`<h1>Hello<h1>`) ;                   
    })

module.exports=router;    