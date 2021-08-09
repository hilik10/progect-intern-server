var crypto = require('./tokenfunc.js');
var token = "hdahs";
var enc = crypto.getEncrypt(token);
console.log(enc);
var dec = crypto.getDecrypt(enc);
console.log(dec);
var hash = crypto.cryptPassword("mali123");
console.log("hash: " + hash);
console.log("try mali123: " + crypto.compare("mali123", hash));


