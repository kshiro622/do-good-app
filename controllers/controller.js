var express = require("express");
var router = express.Router();
var passport = require('passport');
var user = require('./../models/user.js');


// routes go here
router.post('/register', function (req, res) {
    user.register(new user({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        bio: req.body.bio,
        interests: req.body.interests
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.send('User already exists')
        } else {
            res.send(user._id);
        }
    });
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (!user) res.send("INVALID LOGIN");
        if (user) res.send(user._id);
    })(req, res, next);
});


router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.send('done');
    });
});

// Export routes for server.js to use.
module.exports = router;
