/*
* Archivo: models/ratings.js
* Provee el modelo para los ratings de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información de una canción.
var ratingSchema = new mongoose.Schema({
    user_id: { type: String, trim: true },
    song_id: { type: String, trim: true },
    rating: { type: Number },
    created_at: { type: Date, default: Date.now }
});

exports = module.exports = mongoose.model('Rating', ratingSchema);
