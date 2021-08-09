 const express =require('express');
 const usercontroler =require('../controllers/usercontrol.js');
 const login = require('../loginToken/login');
 

 var rautrus= express.Router();

rautrus.post('/create',usercontroler.crate);
rautrus.post('/login',login.login);
rautrus.post('/loginRegister',login.loginRegister);

module.exports = rautrus ;
