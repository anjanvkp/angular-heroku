const express = require('express');
const path = require('path');
const app = express();


// Serve static files....
app.use(express.static(__dirname + '/dist/anjn-angular'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/anjn-angular/index.html'));
});

require("./app/routes/customer.routes.js")(app);

// default Heroku PORT
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });