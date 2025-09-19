const express=require('express');
const app=express();

app.get("/",(req,resp)=>{
    resp.send("Server Working");
})

app.listen(4000);