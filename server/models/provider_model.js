const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaProvider =new Schema({
  name: {
    type: String,
    min: [1],
    max: [25, 'Too long name'],
    required: true
  }
}, {versionKey: false});

module.exports = mongoose.model('Provider', schemaProvider);
