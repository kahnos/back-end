/*
* Archivo: controllers/users.js
* Provee los manejadores de solicitudes HTTP para los usuarios.
*/

var users = require('../models/users.js');

exports.postFacebookLog = function(req, res) {
    console.log('POST /users/loginFacebook')
    
    var FacebookUser = req.params.FacebookModel
    users.find( facebook: "$in": facebook_id: FacebookUser.id )
    .exec(function(err, user){
    
        if (err){
            var newUser = new users({
            name: FacebookUser.name
                last_name: FacebookUser
                email: FacebookUser.email
                icon_url: FacebookUser.image_url
                facebook = {
                    facebook_id: FacebookUser.id  
                         }
            })
            return res.status(200).send(0.toString())
        };

        newUser.save(function(err) {
                if (err) throw err;
                return res.status(200).send(0.toString())
                });
        else {
            return res.status(200).send(1.toString())
        } 
        
    })
}

export.postGoogleLog = function(req, res) {

    console.log('POST /users/loginGoogle')
    
    var GoogleUser = req.params.GoogleModel; 

    users.find( {google: "$in": google_id: User.getId()} ,function(err, user) {
        if (err){
            var newUser = new users({
                name: GoogleUser.getGivenName()
                last_name: GoogleUser.getFamilyName()
                email: GoogleUser.getEmail()
                icon_url: GoogleUser.getImageUrl()
                google = {
                    google_id: GoogleUser.getId()  
                         }
            });

            newUser.save(function(err) {
                if (err) throw err;
                return res.status(200).send(0.toString())
                });
        }
        else {
            return res.status(200).send(1.toString())
        } 
    
    })

}
