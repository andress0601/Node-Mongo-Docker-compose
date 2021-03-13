const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumnosSchema = Schema({
  nombre: String,
  edad: Number,
  genero: String
});

module.exports = mongoose.model('alumnos', AlumnosSchema);