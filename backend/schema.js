const mongoose = require("mongoose");

const safetyRatingSchema = mongoose.Schema({
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
  nhtsaOverallRating: {
    type: Number,
    trim: true,
  },
  iihsTopSafetyPick: {
    type: Boolean,
    trim: true,
  },
  euroNcapRating: {
    type: Number,
    trim: true,
  },
  frontalCrashRating: {
    type: Number,
    trim: true,
  },
  sideCrashRating: {
    type: Number,
    trim: true,
  },
  rolloverRating: {
    type: Number,
    trim: true,
  },
  notes: {
    type: String,
    trim: true,
  },
});

const SafetyRating = mongoose.model("SafetyRating", safetyRatingSchema); // Changed model name
module.exports = SafetyRating;