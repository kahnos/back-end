/*
* Archivo: models/albums.js
* Provee el modelo para los álbumes en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Contiene la información de un album.
var albumSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    duration: { type: Number },
    description: { type: String, trim: true },
    price: { type: Number },
    icon_url: { type: String, trim: true },
    artist: { type: Schema.Types.ObjectId, ref: 'User' },
    songs: [ { type: Schema.Types.ObjectId, ref: 'Song' } ],
    tags: [ { type: String, trim: true } ],
    created_at: { type: Date, default: Date.now }
});

exports = module.exports = mongoose.model('Album', albumSchema);
