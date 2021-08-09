const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var testschema = new Schema({
      supervisor: {
         type: Schema.Types.ObjectId,
         ref: 'supervisor'
     },
   
      key: {
         type: String
      },
      name: {
         type: String
      },
      url: {
         type: String
      }
   
  
})
module.exports = mongoose.model("test", testschema);
