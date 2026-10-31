const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },

  score: {
    type: Number,
    required: true
  },

  totalQuestions: {
    type: Number,
    default: 10
  },

  badge: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Result", resultSchema);