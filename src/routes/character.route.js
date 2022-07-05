const express = require('express');
const router = express.Router();
const characterController = require('../controllers/character.controller');
const { validId, validChar } = require('../middlewares/character.middleware');

router.get('/all-characters', 
characterController.findCharacterController);

router.get(
  '/find-character/:id',
  validId,
  characterController.findCharacterByIdController,
);
router.post(
  '/create',
  validChar,
  characterController.createCharacterController,
);

router.put(
  '/update/:id',
  validId,
  validChar,
  characterController.updateCharacterController,
);

router.delete(
  '/delete/:id',
  validId,
  characterController.deleteCharacterController,
);

module.exports = router;
