/*
* Archivo: models/ratings.js
* Provee el modelo para los ratings de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Contiene la información de un rating.
var ratingSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    song: { type: Schema.Types.ObjectId, ref: 'Song' },
    rating: { type: Number },
    created_at: { type: Date, default: Date.now }
});

exports = module.exports = mongoose.model('Rating', ratingSchema);
