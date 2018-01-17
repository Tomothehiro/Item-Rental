/*
 |--------------------------------------
 | Room Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  groupId: { type: String, required: true },
  description: String,
});

module.exports = mongoose.model('Item', itemSchema);