/*
* Archivo: models/libraries.js
* Provee el modelo para la biblioteca de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información de una canción.
var librarySchema = new mongoose.Schema({
    user_id: { type: String, trim: true },
    song_ids: [ { type: String, trim: true } ],
    album_ids: [ { type: String, trim: true } ]
});

exports = module.exports = mongoose.model('Library', librarySchema);
