/*
* Archivo: models/subscriptions.js
* Provee el modelo para las subscripciones de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información de una canción.
var subscriptionSchema = new mongoose.Schema({
    artist_id: { type: String, trim: true },
    user_id: { type: String, trim: true }
});

exports = module.exports = mongoose.model('Subscription', subscriptionSchema);
