/*
* Archivo: models/transactions.js
* Provee el modelo para las transacciones de compra/venta en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información del producto involucrado.
var productSchema = new mongoose.Schema({
    product_id: { type: String, trim: true },
    product_name: { type: String, trim: true },
    product_type: { type: String, trim: true }
});

/*  Contiene la información de las entidades involucradas en la transacción:
    El usuario comprador, el artista vendedor y el producto vendido. */
var involvedSchema = new mongoose.Schema({
    user_id: { type: String, trim: true },
    artist_id: { type: String, trim: true },
    products: [ productSchema ]
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
