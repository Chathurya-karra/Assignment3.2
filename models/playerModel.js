const mongoose = require('mongoose');

// Define the player schema
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rushingYards: {
    type: Number,
    required: true
  },
  touchdownsThrown: {
    type: Number,
    required: true
  },
  sacks: {
    type: Number,
    required: true
  },
  fieldGoalsMade: {
    type: Number,
    required: true
  },
  fieldGoalsMissed: {
    type: Number,
    required: true
  },
  catchesMade: {
    type: Number,
    required: true
  }
});

// Create the player model
const Player = mongoose.model('team', playerSchema);

module.exports = { Player };
