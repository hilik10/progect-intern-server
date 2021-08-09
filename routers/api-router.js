const express = require('express');
var router = express.Router();
const UserToken = require('../loginToken/userToken');
const usercontroler=require('../controllers/usercontrol');


router.use('', function (req, res, next) {
    var userToken = new UserToken(false, req.headers['x-access-token']);
    console.log(userToken);

    if (userToken.isNotExpired()) {
        return next();
    }
    console.log(userToken);

    res.status(401).send();

});

router.use('/update',usercontroler.updateintern);
router.use('/updateSupervisor',usercontroler.updateSupervisor);



module.exports = router;
