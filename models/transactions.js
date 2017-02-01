/*
* Archivo: models/transactions.js
* Provee el modelo para las transacciones de compra/venta en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*  Contiene la información de las entidades involucradas en la transacción:
    El usuario comprador, el artista vendedor y el producto vendido. */
var involvedSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    artist: { type: Schema.Types.ObjectId, ref: 'User' },
    songs: [ { type: Schema.Types.ObjectId, ref: 'Song' } ],
    albums: [ { type: Schema.Types.ObjectId, ref: 'Album' } ]
});

// Contiene la información de una transacción.
var transactionSchema = new mongoose.Schema({
    amount: { type: Number },
    description: { type: String, trim: true },
    status: { type: String, trim: true },
    card_id: { type: String, trim: true },
    charge_id: { type: String, trim: true },
    created_at: { type: Date, default: Date.now },
    involved: involvedSchema
});

exports = module.exports = mongoose.model('Transaction', transactionSchema);
