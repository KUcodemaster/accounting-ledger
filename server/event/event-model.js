const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('../services/auto-id-setter');

const eventSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  userId: { type: String, required: true },
  onBalance: { type: Boolean, default: true }
});

autoIdSetter(eventSchema, mongoose, "event", "id")
module.exports = mongoose.model('event', eventSchema);