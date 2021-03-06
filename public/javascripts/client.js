// Generated by CoffeeScript 1.3.3
(function() {

  $(document).ready(function() {
    var app, _log, _s_log;
    app = {};
    app.server = io.connect("/");
    console.log("Hello");
    _log = function(message) {
      return console.log(message);
    };
    _s_log = function(o) {
      return console.log(JSON.stringify(o));
    };
    app.server.on("connect", function() {
      _log("connected to the server");
      _log("Connected to the server" + arguments);
      return app.server.on("message", function(data) {
        var user;
        _log("Received message: " + data.message);
        alert(data.message);
        user = prompt("Who are you?");
        return app.server.emit("userName", user);
      });
    });
    return window.app = app;
  });

}).call(this);
