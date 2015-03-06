(function () {
    "use strict";

    //Network
    var socket = io.connect(SOCKET_IO_SERVER);

    socket.on('error', function(){
        console.error(arguments);
    });
    socket.on('ok', function(){
        console.info('success');
    });
}());