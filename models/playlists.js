/*
* Archivo: models/playlists.js
* Provee el modelo para las listas de reproducción de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Contiene la información de una playlist.
var playlistSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    songs: [ { type: Schema.Types.ObjectId, ref: 'Song' } ],
});

exports = module.exports = mongoose.model('Playlist', playlistSchema);
