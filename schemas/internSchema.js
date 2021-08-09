const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var internSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        refPath: 'user2'
    },
    city : {
        type :String
    }, 
    School : {
        type :String
    },
    supervisor_id:{
        type: Schema.Types.ObjectId,
        ref:"supervisor"
    },
   
    done: {
        type: [Schema.Types.ObjectId],
        ref: 'answer'
    }
}) 
module.exports = mongoose.model("intern", internSchema);
