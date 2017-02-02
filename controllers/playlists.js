/*
* Archivo: controllers/playlists.js
* Provee los manejadores de solicitudes HTTP para las listas de reproducción del usuario.
*/

var playlists = require('../models/playlists.js');

// GET - Retorna una playlist con sus canciones.
exports.getPlaylist = function(req, res) {
    console.log('GET /playlists/{playlist_id}');

    // Se busca el documento por su id, si se encuentra, se retorna.
    playlists.findById( req.params.playlist_id )
    .populate('user', 'name last_name icon_url')
    .populate({
        path: 'songs',
        select: 'name duration album artist url',
        populate: [
            {
               path: 'album',
               select: 'name icon_url'
            },
            {
               path: 'artist',
               select: 'name last_name icon_url'
            }
        ]
    })
    .lean()
    .exec(function (err, playlist) {
        if (err) {
            return res.status(500).send(err.message);
        }

        res.status(200).jsonp(playlist);
    });
};
