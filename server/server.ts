

import express = require('express');
var app = express();

app.get('/contactlist', function(req, res){
    
    var i : string = 'Hey';
    res.send(i);
    console.log('http request handled from server');
});
app.listen(3000);
