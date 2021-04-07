let http = require('http');
let server = http.Server();

let io = require('socket.io')(server, {
  cors: {
    origin : "*"
  }
});

const port = 3000;

server.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`);
});

io.on("connection", function(socket){
    socket.on("message", function(payload){
      io.sockets.emit("message", payload);
    });
});
