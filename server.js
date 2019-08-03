const express = require('express');
const app = express();
const path=require('path')


app.use('/public',express.static(__dirname+'/public'));

app.listen( 8080);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

console.log("Express server working")
