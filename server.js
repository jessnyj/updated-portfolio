const path = require("path");
var express = require("express");

var PORT = process.env.PORT || 3000;

// Requiring models for syncing
var db = require("./models");

var app = express();

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on port %s. Visit http://localhost:%s/ in your browser to access.", PORT, PORT);
    });
});