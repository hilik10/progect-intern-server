const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var supervisorSchema=new Schema({

   School: {
        type: String,
        
    },
    students: {
        type: [Schema.Types.ObjectId],
        ref: 'user2',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user2'
         
    },
    tasks: {
        type: Schema.Types.ObjectId,
        ref: 'test'
    },
    done: {
        type: [Schema.Types.ObjectId],
        ref: 'answer'
    }
})
module.exports = mongoose.model('supervisor', supervisorSchema);