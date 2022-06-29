const characterService = require('../services/character.service');
const mongoose = require('mongoose');

const findCharacterController = async (req, res) => {
  const allCharacters = await characterService.findCharacterService();
  res.send(allCharacters);
};

const findCharacterByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'Digite um ID válido' });
  }
  const chosenCharacter = await characterService.findCharacterByIdService(idParam);
  res.send(chosenCharacter);
};

const createCharacterController = (req, res) => {
  const character = req.body;
  if (
    !character ||
    !character.nome ||
    !character.descricao ||
    !character.foto
  ) {
    return res.status(400).send({ message: 'Envie o formulário completo' });
  }
  const newCharacter = characterService.createCharacterService(character);
  res
    .status(201)
    .send({ message: 'Personagem criado com sucesso', data: newCharacter });
};

const updateCharacterController = (req, res) => {
  const idParam = +req.params.id;

  if (!characterService.isValidId(idParam)) {
    return res.status(404).send({ message: 'Digite um ID válido' });
  }

  const characterEdit = req.body;

  if (
    !characterEdit ||
    !characterEdit.nome ||
    !characterEdit.descricao ||
    !characterEdit.foto
  ) {
    return res.status(400).send({ message: 'Envie o formulário completo' });
  }

  const updatedCharacter = characterService.updateCharacterService(
    idParam,
    characterEdit,
  );

  res.send({
    message: 'Personagem atualizado com sucesso',
    data: updatedCharacter,
  });
};

const deleteCharacterController = (req, res) => {
  const idParam = +req.params.id;

  if (!characterService.isValidId(idParam)) {
    return res.status(404).send({ message: 'Digite um ID válido' });
  }

  characterService.deleteCharacterService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findCharacterController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
