const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true, unique: true },
  email: {
    type: String,
    unique: true,
    sparse: true,
    validate: {
      validator: function (v) {
        return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Email inválido',
    },
  },
  direccion: { type: String },
  fechaNacimiento: { type: Date },
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);
