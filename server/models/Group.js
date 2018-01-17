/*
 |--------------------------------------
 | Room Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  admin: { type: Boolean, required: true },
});

module.exports = mongoose.model('Group', groupSchema);