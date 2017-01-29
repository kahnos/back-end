/*
* Archivo: models/videos.js
* Provee el modelo para los videos en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información de una canción.
var videoSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    url: { type: String, trim: true },
    artist_id: { type: String, trim: true },
    tags: [ { type: String, trim: true } ],
    created_at: { type: Date, default: Date.now }
});

exports = module.exports = mongoose.model('Video', videoSchema);
