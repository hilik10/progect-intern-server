const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  
    id : {
        type :String
    }, 
     name : {
        //  צריך לדאוג איך אני מאפשר שזה יהיה מסוג סטרינג אם s קטנה
        type : Object,
        required: true
    }, 
     gmail : {
        type : String,
        unique:true,
        required: true
    },

      phone : {
        type :String
    },
    password:{
        type:String,
       unique:true,
       required: true
    },
    pic: {
        type: String
    },
    role: {
        type: String
    },
    rolNumber:{
        type:Number
    },
    more_info: {
        type: Schema.Types.ObjectId,
        refPath: 'role'
    }
});

module.exports = mongoose.model("user2",userSchema);