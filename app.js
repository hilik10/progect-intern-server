const port = 5000;
const express =require('express');
var app = express();

const mongoose = require('mongoose');
const dbPath = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/interns";
mongoose.connect (dbPath);

app.use(require('./routers/main-router'));

app.listen(port,function(){
})
