(function () {
    'use strict';

    var sio = require('socket.io')(3011);

    //Authentification required
    sio.use(function (socket, next) {
        console.log('refused');
        next(new Error('refused client'));
    });
    sio.of('/client').on('connection', function (socket) {
        console.log('ok');
        socket.emit('ok');
    });
}());