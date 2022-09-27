var express = require("express");

const app= express();

app.use(express.json());

app.use(express.urlencoded())

const users =[{username:"karthik",age:2,},{username:"shajin",age:1,}];

 //const users =[];

app.get("/",(res,req)=>{req.send(users)})

app.post("/",(req,res)=>{
    console.log(req.body);
    users.push(req.body)
    res.status(201).send(req.body);

app.delete("/",(res,req)=>{
    console.log(req.body)
    users.delete(req.body)
    
});

   

});

const port= 4000

app.listen(port,()=>{console.log(`succcesssfully running on port ${port} `);})