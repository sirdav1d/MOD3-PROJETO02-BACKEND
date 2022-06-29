const CharactersRaM = require('../models/CharactersRaM');
const mongoose = require('mongoose');

//função que retorna todos os personagens
const findCharacterService = async () => {
  const characters = await CharactersRaM.find()
  return characters;
};

//funcão que retorna personagem pelo ID
const findCharacterByIdService = async (id) => {
  const character = await CharactersRaM.findById(id);
  return character;
};

//função que retorna um novo personagem e adiciona a lista
const createCharacterService = (newCharacter) => {
  const newId = randomId();
  newCharacter.id = newId;
  characters.push(newCharacter);
  return newCharacter;
};

//função que retorna um personagem da lista editado
const updateCharacterService = (id, characterEdited) => {
  characterEdited['id'] = id;
  const characterIndex = characters.findIndex(
    (character) => character.id === id,
  );
  characters[characterIndex] = characterEdited;
  return characterEdited;
};

//função que deleta um personagem da lista
const deleteCharacterService = (id) => {
  characters.forEach((character, index) => {
    if (character.id === id) {
      characters.splice(index, 1);
    }
  });
};



module.exports = {
  findCharacterService,
  findCharacterByIdService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
