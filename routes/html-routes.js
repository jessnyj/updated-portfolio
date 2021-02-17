// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/assets/index.html"));
        res.render("index");
    });
    // projects route loads projects.html
    app.get("/projects", function (req, res) {
        // res.sendFile(path.join(__dirname,"../public/assets/projects.html"));
        res.render("projects");
    });

    // about route loads about.html
    app.get("/about", function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/assets/about.html"));
        res.render("about");
    });

    // contact route loads contact.html
    app.get("/contact", function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/assets/contact.html"));
        res.render("contact");
    });

    app.get("/blog", function (req, res) {
        db.Blog.findAll({})
        .then(function(data) {
            res.render("blog", data);
        });
    });
};


      // where: {
            //     id: req.user.id,
            // },
        // }).then(function(dbData) {
        //     var hbsData = {
        //         title: dbData.title,
        //         content: dbData.content,
        //         id: dbData.id,
        //     };
        //     console.log(hbsData);
        //     res.render("blog", hbsData);
        // })
        // .catch(function (err) {
        //     console.log(err);
        // });