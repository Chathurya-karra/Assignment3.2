const { Player } = require('../models/playerModel');
const { validationResult } = require('express-validator');

// Controller function to handle adding a new player
const addPlayer = async (req, res) => {
  try {
    const { name, rushingYards, touchdownsThrown, sacks, fieldGoalsMade, fieldGoalsMissed, catchesMade } = req.body;

    // Create a new player instance
    const player = new Player({
      name,
      rushingYards,
      touchdownsThrown,
      sacks,
      fieldGoalsMade,
      fieldGoalsMissed,
      catchesMade
    });

    // Save the player to the database
    await player.save();

    res.status(201).json({ success: true, data: player });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Controller function to handle updating a player
const updatePlayer = async (req, res) => {
  try {
    const playerId = req.params.id;
    const { name, rushingYards, touchdownsThrown, sacks, fieldGoalsMade, fieldGoalsMissed, catchesMade } = req.body;

    // Find the player by ID and update the fields
    const updatedPlayer = await Player.findByIdAndUpdate(
      playerId,
      { name, rushingYards, touchdownsThrown, sacks, fieldGoalsMade, fieldGoalsMissed, catchesMade },
      { new: true }
    );

    if (!updatedPlayer) {
      return res.status(404).json({ success: false, error: 'Player not found' });
    }

    res.json({ success: true, data: updatedPlayer });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Controller function to handle deleting a player
const deletePlayer = async (req, res) => {
  try {
    const playerId = req.params.id;

    // Find the player by ID and delete it
    const deletedPlayer = await Player.findByIdAndRemove(playerId);

    if (!deletedPlayer) {
      return res.status(404).json({ success: false, error: 'Player not found' });
    }

    res.json({ success: true, data: deletedPlayer });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Controller function to handle fetching all players
const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json({ success: true, data: players });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Controller function to handle fetching a player by ID
const getPlayerById = async (req, res) => {
  try {
    const playerId = req.params.id;

    const player = await Player.findById(playerId);

    if (!player) {
      return res.status(404).json({ success: false, error: 'Player not found' });
    }

    res.json({ success: true, data: player });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Export the controller functions
module.exports = {
  addPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers,
  getPlayerById
};
