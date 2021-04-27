const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

io.on("connection", socket => {
    // ...
    socket.on('boarditem-update', (update) => {
        io.emit('boarditem-update', update);
    });

    socket.on('syncketch-update', (update) => {
        io.emit('syncsketch-update', update);
    });

    socket.on('disconnect', () => {});
  });
  
server.listen(3000);