const { Player } = require('../models/playerModel');

// Query to fetch all players
const getAllPlayers = async () => {
  try {
    const players = await Player.find();
    return players;
  } catch (error) {
    throw new Error('Failed to fetch players');
  }
};

// Query to fetch a player by ID
const getPlayerById = async (playerId) => {
  try {
    const player = await Player.findById(playerId);
    if (!player) {
      throw new Error('Player not found');
    }
    return player;
  } catch (error) {
    throw new Error('Failed to fetch player');
  }
};

// Query to add a new player
const addPlayer = async (playerData) => {
  try {
    const player = new Player(playerData);
    const savedPlayer = await player.save();
    return savedPlayer;
  } catch (error) {
    throw new Error('Failed to add player');
  }
};

// Query to update a player by ID
const updatePlayer = async (playerId, playerData) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(playerId, playerData, { new: true });
    if (!updatedPlayer) {
      throw new Error('Player not found');
    }
    return updatedPlayer;
  } catch (error) {
    throw new Error('Failed to update player');
  }
};

// Query to delete a player by ID
const deletePlayer = async (playerId) => {
  try {
    const deletedPlayer = await Player.findByIdAndRemove(playerId);
    if (!deletedPlayer) {
      throw new Error('Player not found');
    }
    return deletedPlayer;
  } catch (error) {
    throw new Error('Failed to delete player');
  }
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  updatePlayer,
  deletePlayer
};
