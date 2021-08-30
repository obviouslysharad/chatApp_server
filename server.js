const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {});


app.get('/', function(req, res){
    return res.send('Hi, Server this side')
})

io.on('connection', socket => {
    console.log('A user has connected')

    io.on('disconnect', () => {
        console.log('User disconnected')
    });
})

httpServer.listen(5000, () => {
    console.log('Server started')
})