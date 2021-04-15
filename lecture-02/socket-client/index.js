let ioclient = require("socket.io-client");

let io = ioclient("http://localhost:8000",{
  extraHeaders: {
    Authorization: `Bearer happy`
  }
});

io.on("connect", function () {
  setInterval(function () {
    io.emit("message", "Hello from client");
  }, 3000);

  io.on("message", function (content) {
    console.log(content);
  });
});
