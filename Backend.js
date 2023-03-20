const http= require('http');
const fs=require('fs');
const hostname='127.0.0.1';
const port=7000;
const express=require('express');
const home=fs.readFileSync('home.html')
const family_support=fs.readFileSync('family_support.html');
const information=fs.readFileSync('information.html')
const lifestyle=fs.readFileSync('lifestyle.html');
const server=http.createServer((req,res)=>{
  console.log(req.url);
  url=req.url;
 res.statusCode=200;
 res.setHeader('Content-type','text/html');

   if(url=='/'){
    res.end(home)
  
    res.sendFile(__dirname+"home.html");
   }
  else if(url=='/family_support'){
    res.end(family);
   }
   else if(url=='/information'){
    res.end(info)
   }
    else if(url=='/lifestyle'){
res.end(lifestyle)
    }
   
   else{
    res.statusCode=404;
    res.end("404")
   }
   
})
server.listen(port,hostname,()=>{
  console.log("Server running")
})
