/*
* Archivo: models/comments.js
* Provee el modelo para los comentarios de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información de una canción.
var commentSchema = new mongoose.Schema({
    user_id: { type: String, trim: true },
    song_id: { type: String, trim: true },
    message: { type: String, trim: true },
    created_at: { type: Date, default: Date.now }
});

exports = module.exports = mongoose.model('Comment', commentSchema);
