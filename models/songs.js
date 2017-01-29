/*
* Archivo: models/songs.js
* Provee el modelo para las canciones en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información de una canción.
var songSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    duration: { type: Number },
    url: { type: String, trim: true },
    price: { type: Number },
    file_name: { type: String, trim: true },
    file_extension: { type: String, trim: true },
    album_id: { type: String, trim: true },
    artist_id: { type: String, trim: true },
    tags: [ { type: String, trim: true } ],
    created_at: { type: Date, default: Date.now }
});

exports = module.exports = mongoose.model('Song', songSchema);
