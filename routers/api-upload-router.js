const express = require('express');
const testcontrol = require('../controllers/testcontrol.js');
var router = express.Router();
const testcontroler=require('../controllers/testcontrol.js');
const supervisorcontrol=require("../controllers/supervisorcontrol");
const interncontrol=require("../controllers/interncontrol");
const UserToken = require('../loginToken/userToken');

router.post('/getall',testcontroler.getalltest);
router.post('/find',testcontrol.find);
router.post('/crateTest',testcontrol.crateTest);

router.post('/crateAnswer',interncontrol.crateAnswer);

// router.use('', function (req, res, next) {
//     var userToken = new UserToken(false, req.headers['x-access-token']);
//     console.log(userToken);

//     if (userToken.isNotExpired()&&userToken.rolNumber==500 ) {
//         return next();
//     }
//     console.log(userToken);

//     res.status(401).send();

// });
router.post('/getname',supervisorcontrol.getintern);
console.log("work");
router.post('/getanswer',supervisorcontrol.getAnswer);
router.post('/delete',testcontroler.deleteTest);
module.exports = router;