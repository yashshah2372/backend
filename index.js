const express = require('express');

const app =express();

app.get('/',(req,res)=>{
    res.json({
        mesg:'hello yash'
    })
})

app.get('/yash',(req,res)=>{
    res.send("hello")
})

app.post('/yash',(req,res)=>{
    res.send("post")
})

app.listen(3000)