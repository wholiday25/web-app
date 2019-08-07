const express = require('express');
const app = express();
const path=require('path')


app.use('/public',express.static(__dirname+'/public'));
app.use('/login',express.static(__dirname+'/login.html'));

app.listen( 8080);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/login.html',function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
});

app.get('/register.html',function(req,res){
    res.sendFile(path.join(__dirname+'/register.html'));
});

console.log("Express server working")
