const express=require('express');
const app=express();
const product = require('./users');
require("./config");
app.get("/",(req,resp)=>{
    resp.send("Server Working");
})

app.put("/create",(req,resp)=>{
    

})

app.listen(4000);