const characterService = require('../services/character.service');

const findCharacterController = async (req, res) => {
  const allCharacters = await characterService.findCharacterService();
  if (allCharacters.length == 0) {
    res.status(206).send({ message: 'Nenhum personagem encontrado' });
  }
  res.send(allCharacters);
};

const findCharacterByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await characterService.findCharacterByIdService(
    idParam,
  );
  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await characterService.createCharacterService(character);
  res
    .status(201)
    .send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const updatedCharacter = await characterService.updateCharacterService(
    idParam,
    characterEdit,
  );

  res.send(updatedCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await characterService.deleteCharacterService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findCharacterController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
