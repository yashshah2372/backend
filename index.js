const express = require('express');
var bodyParser = require('body-parser');
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.json({
        mesg:'hello yash'
    })
})

app.get('/yash',(req,res)=>{
    res.send("hello")
})

app.post('/shah',(req,res)=>{
    console.log(req.body);
})

app.listen(3000)