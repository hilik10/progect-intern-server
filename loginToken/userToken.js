const Encrypt = require ("../token/tokenfunc");
var split = "_!_";
var ttl = 1000 *  60 * 60;

function UserToken (isNew, token, id,name,gmail, phone,password  ) {
    if(isNew) {
        this.id = id;
        this.name = name;
       
        
        this.gmail = gmail;
        this.phone = phone;
        this.password=password;
        if (name=="miri") {
            this.rolNumber=500;
        }else
         
                this.rolNumber=200;
     
     

        this.expirationTime = Date.now() + ttl;
        this.token = Encrypt.getEncrypt(
          
            id + split+
            name + split+
            gmail+ split+
          this.  rolNumber+split+
            this.expirationTime + split+
            phone);
    } else {
        
        this.token = token;
        var tokenStr = Encrypt.getDecrypt(token).split(split);
       
        this.id =  tokenStr[0];
        this.name = tokenStr[1];
        this. gmail= tokenStr[2];
        this. rolNumber= tokenStr[3];

        this.expirationTime = tokenStr[4];
        this.phone = tokenStr[5];
        this.password=tokenStr[6];
    }

    this.isNotExpired = function () {
        if(this.expirationTime && parseInt(this.expirationTime) > Date.now()){
            return true;
        }
        return false;
    }
}

module.exports = UserToken;