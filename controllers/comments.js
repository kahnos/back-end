/*
* Archivo: controllers/comments.js
* Provee los manejadores de solicitudes HTTP para los comentarios.
*/

var comments = require('../models/comments.js');
var mongoose = require('mongoose'),
    ObjectId = mongoose.mongo.ObjectId;

// POST - Añade un nuevo comentario a una canción.
exports.postComment = function(req, res) {
    console.log('POST /comments');
    console.log(req.body);

    comment = new comments({
        user : new ObjectId(req.body.user_id),
        song : new ObjectId(req.body.song_id),
        message : req.body.message
    });

    comment.save(function(err) {
        if ( err )
            return res.status(500).send(err.message);

        res.status(200).jsonp(comment);
    });
}
