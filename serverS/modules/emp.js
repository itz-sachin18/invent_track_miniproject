const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String
});

module.exports = mongoose.model('heads', empSchema);

