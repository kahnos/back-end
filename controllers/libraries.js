/*
* Archivo: controllers/libraries.js
* Provee los manejadores de solicitudes HTTP para la biblioteca del usuario.
*/

var libraries = require('../models/libraries.js');


// GET - Retorna el contenido de la biblioteca de un usuario 
exports.getLibrary = function(req, res) {
    console.log('GET /libraries?user_id='+req.query.user_id);

    // Se busca el documento por el id de usuario
    libraries.find({ user: req.query.user_id })
    .populate('user','name last_name')
    .populate({
    	path: 'songs',
    	select: 'name duration album artist url',
    	populate: { 
    		path: 'artist', 
    		select: 'name last_name' 
    	}
  	})
    .populate({
    	path: 'albums',
    	select: 'name icon_url songs artist',
    	populate: [{ 
    		path: 'songs', 
    		select: 'name duration url'
    	},
    	 {
    		path: 'artist', 
    		select: 'name last_name'
    	}]
  	})
    .lean()
    .exec(function(err, library){
    	if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).jsonp(library);
    });
} 