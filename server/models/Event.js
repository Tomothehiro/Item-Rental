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
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  viewPublic: { type: Boolean, required: true },
  allDay: { type: Boolean, required: true },
  id: String, // repeating events will have same id
  description: String,
});

module.exports = mongoose.model('Event', eventSchema);