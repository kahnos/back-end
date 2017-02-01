/*
* Archivo: models/comments.js
* Provee el modelo para los comentarios de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Contiene la información de un comentario.
var commentSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    song: { type: Schema.Types.ObjectId, ref: 'Song' },
    message: { type: String, trim: true },
    created_at: { type: Date, default: Date.now }
});

exports = module.exports = mongoose.model('Comment', commentSchema);
