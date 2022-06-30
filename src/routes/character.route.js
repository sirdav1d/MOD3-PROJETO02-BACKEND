const express = require('express');
const router = express.Router();
const characterController = require('../controllers/character.controller');

router.get('/all-characters', characterController.findCharacterController);
router.get(
  '/find-character/:id',
  characterController.findCharacterByIdController,
);
router.post('/create', characterController.createCharacterController);
router.put('/update/:id', characterController.updateCharacterController);
router.delete('/delete/:id', characterController.deleteCharacterController);

module.exports = router;
