var db = require("../models");

module.exports = function (app) {
    app.post("/api/user", function (req, res) {
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            message: req.body.message
        })
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });
}

