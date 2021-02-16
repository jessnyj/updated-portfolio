// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });
    // projects route loads projects.html
    app.get("/projects", function (req, res) {
        res.sendFile(path.join(__dirname,"../public/assets/projects.html"));
    });

    // about route loads about.html
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/about.html"));
    });

    // contact route loads contact.html
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/contact.html"));
    });

};
