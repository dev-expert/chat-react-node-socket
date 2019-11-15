module.exports = (server) => {
    const io = require('socket.io')(server);
    let pot = 0;
    let names = [];
    let serverNames = [];
    io.on('connection', socket => {
        console.log('User connected')
    
        socket.on('change color', (color) => {
            console.log('Color Changed to: ', color)
            io.sockets.emit('change color', color)
        })

        socket.on('message', (message) => {
            console.log('message Changed to: ', message)
            io.sockets.emit('message', message)
        })

        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
    });
}