let express = require("express");
let http = require("http");
let mongoose = require("mongoose");
let admin = require("firebase-admin");

let app = express();
let server = http.Server(app);

var serviceAccount = require("./service.json");
const { firestore } = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

mongoose.connect(
  "mongodb+srv://anuj:anuj@cluster0.x36ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

let io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

let User = mongoose.model("User", {
  name: { type: String },
  phone: { type: String, unique: true },
  firebaseId: { type: String, unique: true },
});

const port = 8000;

app.use(express.json());

// app.use(function(req, res, next){
//   console.log("printing at middleware");
//   next();
// })

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.post("/users/", function (req, res) {
  console.log(req.body);
  let { name, phone } = req.body;
  let user = User.create({ name, phone });
  user.then(function (out) {
    res.send(out);
  });
});

server.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});

io.use(function (socket, next) {
  if (socket.request.headers.authorization) {
    let authorization = socket.request.headers.authorization;
    let token = authorization.slice(7);
    admin
      .auth()
      .verifyIdToken(token)
      .then(function (user) {
        console.log(user.firebase.identities.phone);
        socket.user = user;
        next();
      })
      .catch(function (error) {
        socket.close();
      });
  } else {
    socket.close();
  }
});

io.on("connection", function (socket) {
  socket.on("message", function (payload) {
    io.sockets.emit("message", payload);
  });
});
