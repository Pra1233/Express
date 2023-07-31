// const http=require('http');

const express=require('express');

const app=express();
app.use((req,res,next)=>{  //middleware function ,request handler, it will
console.log("Middleware 1");       // execute for every incoming request 
next();                    //help us to execute next middle ware
})

app.use((req,res,next)=>{    //middleware
    console.log("Middleware 2");
    res.send("<h1>Hello </h1>"); //allow us to send response of  //    any type content type et to text/html

})
// const server=http.createServer(app);
// server.listen(3000);
app.listen(3000);