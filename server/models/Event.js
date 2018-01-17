/*
 |--------------------------------------
 | Event Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  groupId: { type: String, required: true },
  location: { type: String, required: true },
  startDatetime: { type: Date, required: true },
  endDatetime: { type: Date, required: true },
  viewPublic: { type: Boolean, required: true },
  description: String,
});

module.exports = mongoose.model('Event', eventSchema);