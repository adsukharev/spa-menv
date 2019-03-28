const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Provider = require('./provider_model.js');

const schemaClient =new Schema({
  name: {
    type: String,
    max: [25, 'Too long name'],
    required: true
  },
  email: {
    type: String,
    min:[4, 'Too short email'],
    max: [25, 'Too long email'],
  },
  phone: {
    type: String,
    min:[2, 'Too short phone number'],
    max: [18, 'Too long phone number'],
  },
  providers: [{ type: Schema.Types.ObjectId, ref: 'Provider' }]
}, {versionKey: false});

module.exports = mongoose.model('Client', schemaClient);
