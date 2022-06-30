const CharactersRaM = require('../models/CharactersRaM');
const mongoose = require('mongoose');

//função que retorna todos os personagens
const findCharacterService = async () => {
  const characters = await CharactersRaM.find();
  return characters;
};

//funcão que retorna personagem pelo ID
const findCharacterByIdService = async (id) => {
  const character = await CharactersRaM.findById(id);
  return character;
};

//função que retorna um novo personagem e adiciona a lista
const createCharacterService = async (newCharacter) => {
  const newCharacterRaM = await CharactersRaM.create(newCharacter);
  return newCharacterRaM;
};

//função que retorna um personagem da lista editado
const updateCharacterService = async (id, characterEdited) => {
  const updatedCharacter = await CharactersRaM.findByIdAndUpdate(id, characterEdited);
  return updatedCharacter;
};

//função que deleta um personagem da lista
const deleteCharacterService = async (id) => {
  return await CharactersRaM.findByIdAndDelete(id)
}

module.exports = {
  findCharacterService,
  findCharacterByIdService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
