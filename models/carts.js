/*
* Archivo: models/carts.js
* Provee el modelo para el carro de compras de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Contiene la información del carro de compras.
var cartSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    songs: [ { type: Schema.Types.ObjectId, ref: 'Song' } ],
    albums: [ { type: Schema.Types.ObjectId, ref: 'Album' } ]
});

exports = module.exports = mongoose.model('Cart', cartSchema);
