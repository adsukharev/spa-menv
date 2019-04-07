const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaProvider =new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    maxlength: [25, "Too long provider's name"],
    required: [true, "Provider's name is required"],
    unique: true
  }
},
    {versionKey: false});

module.exports = mongoose.model('Provider', schemaProvider);
