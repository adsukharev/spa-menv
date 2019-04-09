const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Provider = require('./provider_model.js');

const schemaClient =new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    maxlength: [25, ' Too long name'],
    required: [true, ' Name is required'],
    unique: true
  },
  email: {
    type: String,
    minlength:[6, ' Too short email'],
    maxlength: [25, ' Too long email'],
    required: [true, ' Email is required'],
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: ' Not a valid email'
    }
  },
  phone: {
    type: String,
    minlength:[2, ' Too short phone number'],
    maxlength: [18, ' Too long phone number'],
    required: [true, ' Phone is required'],
    validate: {
      validator: function(v) {
        return /^[0-9 -]+$/.test(v);
      },
      message: ' Not a valid phone number'
    }
  },
  providers: [{ type: Schema.Types.ObjectId, ref: 'Provider'}]
},
    {versionKey: false});

module.exports = mongoose.model('Client', schemaClient);