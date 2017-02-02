/*
* Archivo: controllers/songs.js
* Provee los manejadores de solicitudes HTTP para las canciones.
*/

var songs = require('../models/songs.js');

// GET - Retorna una canción específica y sus datos asociados.
exports.getSong = function(req, res) {
    console.log('GET /songs/{song_id}');

    // Se busca el documento por su id, si se encuentra, se retorna.
    songs.findById( req.params.song_id )
    .populate('album', 'name icon_url')
    .populate('artist', 'name last_name icon_url')
    .lean()
    .exec(function (err, song) {
        if (err) {
            return res.status(500).send(err.message);
        }

        // Se buscan los comentarios asociados
        var comments = require('../models/comments.js');
        comments.find({ song: song._id })
        .select('message created_at')
        .populate('user', 'name last_name icon_url')
        .lean()
        .exec(function(err, comments) {
            if ( err )
                return res.status(500).send(err.message);

            song.comments = comments;

            // Se buscan los ratings asociados
            var ratings = require('../models/ratings.js');
            ratings.find({ song: song._id })
            .select('rating')
            .lean()
            .exec(function(err, ratings) {
                if ( err )
                    return res.status(500).send(err.message);

                song.ratings = ratings;

                // Se calcula el promedio.
                var sum = 0;
                for (var i = 0; i < ratings.length; i++) {
                    sum += ratings[i].rating;
                }
                avg = sum / ratings.length;
                song.ratings_avg = avg;

                res.status(200).jsonp(song);
            });
        });
    });
};
