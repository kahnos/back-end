/*
* Archivo: models/playlists.js
* Provee el modelo para las listas de reproducción de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información de una canción.
var playlistSchema = new mongoose.Schema({
    user_id: { type: String, trim: true },
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    song_ids: [ { type: String, trim: true } ],
});

exports = module.exports = mongoose.model('Playlist', playlistSchema);
