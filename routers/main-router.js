const express =require('express'); 
var router = express.Router();

router.use (require("cors")());
router.use (express.json());

router.use('/auth',require('./auth-rauter'));
router.use('/api',require('./api-router'));
router.use('/upload',require('./api-upload-router'));


module.exports = router;

