/*
* Archivo: models/carts.js
* Provee el modelo para el carro de compras de los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información del producto en el carro.
var productSchema = new mongoose.Schema({
    product_id: { type: String, trim: true },
    product_name: { type: String, trim: true },
    product_type: { type: String, trim: true },
    product_price: { type: Number },
    artist_id: { type: String, trim: true },
    artist_name: { type: String, trim: true }
});

// Contiene la información de una canción.
var cartSchema = new mongoose.Schema({
    user_id: { type: String, trim: true },
    products: [ productSchema ]
});

exports = module.exports = mongoose.model('Cart', cartSchema);
