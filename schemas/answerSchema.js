const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var answerSchema =new Schema ({
    intern: {
        type: Schema.Types.ObjectId,
        ref: 'user2'
    },
  
        key: {
            type: String
         },
         name: {
            type: String,
            unique:true
         },
         url: {
            type: String
         }
  
})
module.exports = mongoose.model('answer', answerSchema);
