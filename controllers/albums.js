/*
* Archivo: controllers/albums.js
* Provee los manejadores de solicitudes HTTP para los álbumes.
*/

var albums = require('../models/albums.js');

// GET - Retorna la data de un album especifico 
exports.getAlbum = function(req, res) {
    console.log('GET /albums/:album_id');

    // Se busca el documento por el id del album
    albums.findById(req.params.album_id)
    .populate('artist','name last_name')
    .populate('songs','name duration album url')
    .lean()
    .exec(function(err, album){
    	if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).jsonp(album);
    });
} 