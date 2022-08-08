const express = require('express');
var bodyParser = require('body-parser');
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/yash',(req,res)=>{
    res.send("hello")
})

app.get('/any',(req,res)=>{
    res.send("bye")
})

app.post('/shah',(req,res)=>{
    console.log(req.body);
})

app.post('/api',(req,res)=>{
    res.send("Hiiii");
})


app.listen(3000)