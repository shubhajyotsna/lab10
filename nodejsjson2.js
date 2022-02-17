const http=require('http')
const cors=require('cors')
const {load2}=require('./nodejsjson.js');
const express=require('express')
const app=express();
app.use(cors({
    origin:"*",
}))

const customers = require("./customer");
console.log(customers);






const port=5200;
app.listen(port,()=>console.log("Server is Running.."));
app.get('/user', (req,res)=>
{
    res.send(load2())
});
