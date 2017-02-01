/*
* Archivo: models/subscriptions.js
* Provee el modelo para las subscripciones de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Contiene la información de una canción.
var subscriptionSchema = new mongoose.Schema({
    artist: { type: Schema.Types.ObjectId, ref: 'User' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

exports = module.exports = mongoose.model('Subscription', subscriptionSchema);
