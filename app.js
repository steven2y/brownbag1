// Generated by CoffeeScript 1.3.3

/*
Module dependencies.
*/


(function() {
  var app, db, express, http, io, nano, path, routes, socket, user, users;

  express = require("express");

  socket = require("socket.io");

  routes = require("./routes");

  user = require("./routes/user");

  http = require("http");

  path = require("path");

  nano = require("nano")('http://localhost:5984');

  db = nano.db.use('brownbag1');

  app = module.exports = express.createServer();

  io = socket.listen(app);

  app.configure(function() {
    app.set("port", process.env.PORT || 3000);
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
    app.use(express.favicon());
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    return app.use(express["static"](path.join(__dirname, "public")));
  });

  app.configure("development", function() {
    return app.use(express.errorHandler());
  });

  app.get("/", routes.index);

  app.get("/users", user.list);

  app.listen(3000, function() {
    return console.log("==> Server listening on port %d in %s mode", app.address().port, app.settings.env);
  });

  users = ["michel", "guest"];

  io.sockets.on("connection", function(socket) {
    console.log("User connected");
    socket.emit("message", {
      message: "Welcome to the brownbag1 chat"
    });
    socket.on("userName", function(data) {
      return console.log;
    });
    return socket.on("chat", function(data) {
      return console.log(data);
    });
  });

}).call(this);
