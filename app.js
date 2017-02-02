/*
* Archivo: app.js
* Archivo principal que se conecta a la BD, crea el middleware, asigna las rutas de la API e inicializa el servidor que utilizará express.
*/

var bodyParser  = require("body-parser"), // Permite parsear JSON. Decodificará a JSON la entrada de las solicitudes.
    mongoose = require('mongoose'), // Módulo para manejar bases de dato MongoDB.
    express = require("express"), // Framework de nodeJS.
    app = express();

require('dotenv').config(); // Módulo que permite la carga de archivos .env

// Conexión a la BD
mongoose.connect('mongodb://' + process.env.TESTING_DB_HOST + '/' + process.env.TESTING_DB_NAME);
var db = mongoose.connection;

// Se llama si la conexión con la BD devuelve un error.
db.on('error', console.error.bind(console, 'Database connection error:'));

// Se llama una vez que la conexión con la BD se realice correctamente.
db.once('open', function() {
    // Se aplica el middleware (bodyparser) a la instancia de express llamada app.
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Se importan los controladores.
    var albumsController = require('./controllers/albums.js');
    var cartsController = require('./controllers/carts.js');
    var commentsController = require('./controllers/comments.js');
    var librariesController = require('./controllers/libraries.js');
    var playlistsController = require('./controllers/playlists.js');
    var ratingsController = require('./controllers/ratings.js');
    var songsController = require('./controllers/songs.js');
    var subscriptionsController = require('./controllers/subscriptions.js');
    var transactionsController = require('./controllers/transactions.js');
    var usersController = require('./controllers/users.js');
    var videosController = require('./controllers/videos.js');

    // Se crean los enrutadores para asignar los distintos endpoints.
    var albums = express.Router();
    var carts = express.Router();
    var comments = express.Router();
    var libraries = express.Router();
    var playlists = express.Router();
    var ratings = express.Router();
    var songs = express.Router();
    var subscriptions = express.Router();
    var transactions = express.Router();
    var users = express.Router();
    var videos = express.Router();

    // Se asignan las funciones que manejarán los distintos endpoints.
    // Rutas para álbumes
    albums.route('/albums/:album_id')
        .get(albumsController.getAlbum);

    // Rutas para el carro de compras

    // Rutas para comentarios
    comments.route('/comments')
        .post(commentsController.postComment);

    // Rutas para la biblioteca
    libraries.route('/libraries')
        .get(librariesController.getLibrary);

    // Rutas para la lista de reproducción
    songs.route('/playlists/:playlist_id')
        .get(playlistsController.getPlaylist);

    // Rutas para los ratings

    // Rutas para las canciones
    songs.route('/songs/:song_id')
        .get(songsController.getSong);

    // Rutas para las subscripciones

    // Rutas para las transacciones

    // Rutas para los usuarios

    // Rutas para los videos

    // Se aplican los routers a la API.
    app.use('/api', albums);
    app.use('/api', carts);
    app.use('/api', comments);
    app.use('/api', libraries);
    app.use('/api', playlists);
    app.use('/api', ratings);
    app.use('/api', songs);
    app.use('/api', subscriptions);
    app.use('/api', transactions);
    app.use('/api', users);
    app.use('/api', videos);

    // Se inicia el servidor en el puerto 1305 de localhost.
    app.listen(1305, function() {
      console.log("Servidor node.js activo en http://localhost:1305");
    });
});
