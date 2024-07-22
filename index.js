const express = require('express');
var app = express();

app.get('/users',(req,res) => {
    res.sendFile('./index.html',{root:__dirname});
})

app.listen(3000);