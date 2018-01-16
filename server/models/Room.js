/*
 |--------------------------------------
 | Room Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  description: String
});

module.exports = mongoose.model('Room', roomSchema);