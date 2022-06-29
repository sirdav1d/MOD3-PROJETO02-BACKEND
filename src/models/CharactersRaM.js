const mongoose = require('mongoose');

const CharSchema = new mongoose.Schema({
  nome:{
    type:String,
    require:true
  },
  descricao:{
    type:String,
    require:true,
  },
  foto:{
    type:String,
    require:true,
  },
});


const CharactersRaM = mongoose.model('charactersRaM', CharSchema);
module.exports = CharactersRaM;
