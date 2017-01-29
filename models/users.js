/*
* Archivo: models/users.js
* Provee el modelo para los usuarios en la BD de Vinyl con un objeto de Mongoose y lo exporta.
*/

var mongoose = require('mongoose');

// Contiene la información de Stripe.
var stripeSchema = new mongoose.Schema({
    customer_id: { type: String, trim: true },
    managed_account_id: { type: String, trim: true }
});

// Contiene la información de Facebook.
var facebookSchema = new mongoose.Schema({
    facebook_id: { type: String, trim: true },
    url: { type: String, trim: true }
});

// Contiene la información de Twitter.
var twitterSchema = new mongoose.Schema({
    twitter_id: { type: String, trim: true },
    url: { type: String, trim: true }
});

// Contiene la información de Google+.
var googleSchema = new mongoose.Schema({
    google_id: { type: String, trim: true },
    url: { type: String, trim: true }
});

// Contiene la información de las tarjetas del usuario.
var cardSchema = new mongoose.Schema({
    card_id: { type: String, trim: true },
    type: { type: String, trim: true },
    status: { type: String, trim: true },
    default: { type: Boolean }
});

// Contiene la información de un usuario.
var userSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    date_of_birth: { type: Date, trim: true },
    sex: { type: String, trim: true },
    email: { type: String, trim: true },
    balance: { type: Number },
    icon_url: { type: String, trim: true },
    website_url: { type: String, trim: true },
    country: { type: String, trim: true },
    status: { type: String, trim: true },
    stripe: stripeSchema,
    facebook: facebookSchema,
    twitter: twitterSchema,
    google: googleSchema,
    cards: [ cardSchema ]
});

exports = module.exports = mongoose.model('User', userSchema);
