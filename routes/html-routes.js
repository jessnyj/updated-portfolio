var path = require("path");
var db = require("../models");

module.exports = function (app) {
    // index route loads index.handlebars
    app.get("/", function (req, res) {
        res.render("index");
    });
    // projects route loads projects.handlebars
    app.get("/projects", function (req, res) {
        res.render("projects");
    });

    // about route loads about.handlebars
    app.get("/about", function (req, res) {
        res.render("about");
    });

    // contact route loads contact.handlebars
    app.get("/contact", function (req, res) {
        res.render("contact");
    });

    app.get("/blog", function (req, res) {
        db.Blog.findAll({})
        .then(function(data) {
        var hbsObject = {
            blogs: data
        };
        console.log(hbsObject);
        res.render("blog", hbsObject);
    });
    });
};

