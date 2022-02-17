const mysql=require('mysql2');
const express=require('express');
var app=express();
const parser=require('body-parser');
app.use(parser.json());
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'SQL12345',
    database:'bus'
});
connection.connect((err)=>
{
    if(!err) 
    console.log('DB connected');
    else
    console.log('Error');
})
app.listen(5700,()=>console.log('server started...'));
app.get('/eventinformation',(req,res)=>
{
    connection.query('SELECT * FROM buses',(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log("error");
    })
})
app.get('/eventinformation/:event_name',(req,res)=>
{
    connection.query('SELECT * FROM buses WHERE event_name=?',[req.params.event_name],(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log("error");
    })
})
app.get('/add',(req,res)=>
{
    var post={e_id:129,event_name:'Sailing',price:3000,no_of_tickets:4,description:'best',medium_id:1};
    var sql='INSERT INTO buses SET ?';
    var query=connection.query(sql,post,(err,result)=>
    {
        if (err) throw err;
        res.send("Inserted Rows...");
    })
});

app.get('/update/:event_name',(req,res)=>
{
    var name1=2500
    var sql=`UPDATE buses SET price='${name1}' WHERE event_name= '${req.params.event_name}'`;
    var query=connection.query(sql,(err,result)=>
    {
        if (err) throw err;
        res.send("Inserted Updated...");
    })
});
app.get('/delete/:event_name',(req,res)=>
{
    var sql=`Delete from buses WHERE event_name= '${req.params.event_name}'`;
    var query=connection.query(sql,(err,result)=>
    {
        if (err) throw err;
        res.send("Deleted");
    })
});