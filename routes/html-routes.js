// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // cms route loads cms.html
    app.get("/projects", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/projects.html"));
    });

    // blog route loads blog.html
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    // authors route loads author-manager.html
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

};