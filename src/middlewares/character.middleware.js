const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(206).send({ message: 'Digite um ID válido' });
  } else {
    next();
  }
};

const validChar = (req, res, next) => {
  const character = req.body;
  if (
    !character ||
    !character.nome ||
    !character.descricao ||
    !character.foto
  ) {
    return res.status(400).send({ message: 'Envie o formulário completo' });
  } else {
    next();
  }
};

module.exports = {
  validId,
  validChar,
};
