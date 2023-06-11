const express = require('express');
const { body, param } = require('express-validator');
const { addPlayer, updatePlayer, deletePlayer, getAllPlayers, getPlayerById } = require('../controllers/playerController');

const router = express.Router();

// Add a new player
router.post(
  '/players',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('rushingYards').notEmpty().withMessage('Rushing yards is required'),
    body('touchdownsThrown').notEmpty().withMessage('Touchdowns thrown is required'),
    body('sacks').notEmpty().withMessage('Sacks is required'),
    body('fieldGoalsMade').notEmpty().withMessage('Field goals made is required'),
    body('fieldGoalsMissed').notEmpty().withMessage('Field goals missed is required'),
    body('catchesMade').notEmpty().withMessage('Catches made is required')
  ],
  addPlayer
);

// Update a player
router.put(
  '/players/:id',
  [
    param('id').isMongoId().withMessage('Invalid player ID'),
    body('name').optional(),
    body('rushingYards').optional(),
    body('touchdownsThrown').optional(),
    body('sacks').optional(),
    body('fieldGoalsMade').optional(),
    body('fieldGoalsMissed').optional(),
    body('catchesMade').optional()
  ],
  updatePlayer
);

// Delete a player
router.delete('/players/:id', param('id').isMongoId().withMessage('Invalid player ID'), deletePlayer);

// Get all players
router.get('/players', getAllPlayers);

// Get a player by ID
router.get('/players/:id', param('id').isMongoId().withMessage('Invalid player ID'), getPlayerById);

module.exports = router;
