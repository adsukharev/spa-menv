const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Provider = require('./provider_model.js');

const schemaClient =new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    maxlength: [25, 'Too long name'],
    required: [true, 'Name is required'],
    unique: true
  },
  email: {
    type: String,
    minlength:[4, 'Too short email'],
    maxlength: [25, 'Too long email'],
    required: [true, 'Email is required']
  },
  phone: {
    type: String,
    minlength:[2, 'Too short phone number'],
    maxlength: [18, 'Too long phone number'],
    required: [true, 'Phone is required']
  },
  providers: [{ type: Schema.Types.ObjectId, ref: 'Provider'}]
},
    {versionKey: false});

module.exports = mongoose.model('Client', schemaClient);